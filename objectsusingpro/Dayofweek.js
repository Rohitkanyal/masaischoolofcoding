function dayOfTheWeek(day, N) {
    //write code here
    var count = 0;
    var obj = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 0
    }

    for (var k in obj) {
        if (day == k) {
            var sum = N + obj[k];
            sum = sum % 7;
        }
    }
    for (var k in obj) {
        if (sum == obj[k]) {
            console.log(k);
        }
    }

}