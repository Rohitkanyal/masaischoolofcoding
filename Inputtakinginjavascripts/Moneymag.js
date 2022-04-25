function runProgram(input) {
    input = input.trim().split("\m")
    var len = +input[0]
    var expenses = input[1].trim().split(" ").map(Number)
    moneyManagement(len, expenses, salary)

}


function moneyManagement(len, expenses, salary) {
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