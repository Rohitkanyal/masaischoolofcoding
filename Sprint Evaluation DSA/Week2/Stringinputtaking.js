// find the giving string has repeting elements or not.
function runProgram(input) {
    tom(input)
}

function tom(input) {
    var obj = {}
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    for (var k in obj) {
        if (obj[k] != 1) {
            count++;
        }
    }
    if (count > 0) {
        console.log("No");
    } else {
        console.log("Unique");
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