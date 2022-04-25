function runProgram(input) {
    input = input.trim().split(" ").map(Number)
    var [one, two, three, four, five, six] = [1, 2, 3, 4, 5, 6]

    productofSix(one, two, three, four, five, six)
}

function productofSix(one, two, three, four, five, six) {
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