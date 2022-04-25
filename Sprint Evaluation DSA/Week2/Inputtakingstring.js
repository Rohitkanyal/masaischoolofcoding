//find the number which come only once in the given string
function runProgram(input) {
    input = input.trim().split("\n");
    test = +input[0];
    var line = 1;
    for (var i = 0; i < test; i++) {
        var D = +input[line].trim();
        line++;
        var tomd = input[line].trim().split(" ").map(Number);
        line++;
        tom(D, tomd)
    }


}

function tom(D, tomd) {
    var obj = {}
    var bag = "";
    var count = 0;
    for (var i = 0; i < tomd.length; i++) {
        var char = tomd[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    for (var k in obj) {
        if (obj[k] == 1) {
            console.log(k);
        }
    }
}





if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}