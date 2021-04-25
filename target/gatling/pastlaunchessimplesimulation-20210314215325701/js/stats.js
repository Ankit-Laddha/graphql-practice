var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5875",
        "ok": "5875",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1719",
        "ok": "1719",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1476",
        "ok": "1476",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2931",
        "ok": "2931",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3716",
        "ok": "3716",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5412",
        "ok": "5412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 448,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 523,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.608",
        "ok": "19.608",
        "ko": "-"
    }
},
contents: {
"req_missing-name-b06d1": {
        type: "REQUEST",
        name: "",
path: "",
pathFormatted: "req_missing-name-b06d1",
stats: {
    "name": "",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5875",
        "ok": "5875",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1719",
        "ok": "1719",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1476",
        "ok": "1476",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2931",
        "ok": "2931",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3716",
        "ok": "3716",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5412",
        "ok": "5412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 448,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 523,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.608",
        "ok": "19.608",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
