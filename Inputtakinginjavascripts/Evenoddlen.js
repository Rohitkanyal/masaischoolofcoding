function runProgram(input) {
    input = input.trim().split('\n')
    console.log(input)
    var len = +input[0]
    var arr = input[1].split(" ").map(Number)
    checkEven(len, arr)
}

function checkEven(len, arr) {
    //write logic here
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