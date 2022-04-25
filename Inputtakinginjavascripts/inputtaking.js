// function tom(input){

// }

//single input taking


function runProgram(input) {
    input = +(input) // Number(input)

    //masaiEvenOrOdd(input)

    function masaiEvenOrOdd(input)
}

function masaiEvenOrOdd(input) {
    //write logic here
    if (input % 2 == 0) {
        console.log("Even")
    } else {
        console.log("Odd")
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