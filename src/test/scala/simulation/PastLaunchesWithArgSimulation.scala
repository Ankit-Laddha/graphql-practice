package simulation

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ObjectNode
import com.vimalselvam.graphql.GraphqlTemplate
import io.gatling.core.Predef.{Simulation, _}
import io.gatling.http.Predef._

import java.io.File
import scala.util.Random

class PastLaunchesWithArgSimulation extends Simulation {

  val BASE_URL = "https://api.spacex.land/graphql"

  val httpProtocol = http
    .baseUrl(BASE_URL)
    .userAgentHeader("dealer-gatling")
    .disableCaching

  // Read a graphql file
  val pastLaunchFile = new File("src/test/resources/launchesPast.graphql")

  // Create a variables to pass to the graphql query
  val pastLaunchVariables: ObjectNode = new ObjectMapper().createObjectNode
  pastLaunchVariables.put("limit", 2)
  pastLaunchVariables.set("launchFind", new ObjectMapper().createObjectNode.put("launch_year", "2019"))

  val body: String = GraphqlTemplate.parseGraphql(pastLaunchFile, pastLaunchVariables)
  println(s"ABC:: $body")

  val findPastLaunchesWithArgScn = scenario("find-past-launches-scn")
    .exec(http("")
      .post("/")
      .body(StringBody(body)).asJson
      .check(status is 200)
    )

  setUp(
    findPastLaunchesWithArgScn.inject(
      atOnceUsers(1)
    ).protocols(httpProtocol)
  )

}
