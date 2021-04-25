package simulation

import com.vimalselvam.graphql.GraphqlTemplate
import io.gatling.core.Predef.{Simulation, _}
import io.gatling.http.Predef._

import java.io.File
import scala.concurrent.duration.DurationInt

class PastLaunchesSimpleSimulation extends Simulation {

  val BASE_URL = "https://api.spacex.land/graphql"

  val httpProtocol = http
    .baseUrl(BASE_URL)
    .userAgentHeader("dealer-gatling")
    .disableCaching

  // Read a graphql file
  val pastLaunchFile = new File("src/test/resources/launchesPast-simple.graphql")
  val body: String = GraphqlTemplate.parseGraphql(pastLaunchFile, null)

  println(s"Request body to be sent:: $body")

  val findPastLaunchesScn = scenario("find-past-launches-scn")
    .exec(http("")
      .post("/")
      .body(StringBody(body)).asJson
      .check(status is 200)
    )

  setUp(
    findPastLaunchesScn.inject(
      atOnceUsers(500),
      rampUsers(500).during(50.seconds)
    ).protocols(httpProtocol)
  )

}
