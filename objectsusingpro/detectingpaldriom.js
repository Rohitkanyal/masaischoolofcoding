function detectPalII(N, string) {
    //write code here
    obj = {};
    for (var i = 0; i < N; i++) {
        var char = string[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    var count = 0;
    for (var i = 0; i < N; i++) {
        for (var k in obj) {
            if (k == string[i]) {
                if (obj[k] % 2 == 1) {
                    count++;
                }
            }
        }
    }
    if (count > 1) {
        console.log("Not Possible!");
    } else {
        console.log("Possible!");
    }

}