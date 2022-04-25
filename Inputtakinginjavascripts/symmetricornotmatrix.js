function runProgram(input) {

    input = input.trim().split("\n")
    var tc = +input[0]
    var line = 1

    for (var i = 0; i < tc; i++) {
        //create empty matrix and then
        var mat = []
        var size = +input[line]
        line++
        for (var j = 0; j < size; j++) {
            mat.push(input[line].trim().split(" ").map(Number))
            line++
        }
        console.log(mat)
        symmetricOrNot(mat)

    }


}

function symmetricOrNot(mat) {
    //write Code here
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