function runProgram(input) {
    input = input.trim().split('\n')
    var tc = +input[0]
    var line = 1
    for (var i = 0; i < tc; i++) {
        var len = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        var target = +input[line++]

    }
}

function moneyManagement(len, expenses, salary) {
    //wrtie logic here
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