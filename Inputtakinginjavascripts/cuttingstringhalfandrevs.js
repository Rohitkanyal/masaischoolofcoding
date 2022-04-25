function runProgram(input) {
    tom(input)

}

function tom(input) {
    var bag = "";

    if (input.length % 2 == 1) {
        var length1 = input.length + 1;
        length1 = length1 / 2
        for (var i = length1 - 2; i >= 0; i--) {
            bag += input[i];
        }
        bag += input[length1 - 1]
        for (var j = input.length - 1; j >= length1; j--) {
            bag += input[j];
        }
    } else {
        var length = input.length / 2;
        for (var i = length - 1; i >= 0; i--) {
            bag += input[i];
        }
        for (var j = input.length - 1; j >= length; j--) {
            bag += input[j];
        }
    }
    console.log(bag);
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