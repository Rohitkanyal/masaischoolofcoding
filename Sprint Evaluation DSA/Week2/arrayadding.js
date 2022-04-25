function tom(m, arr1, arr2) {
    var pro = 0;
    for (i = 0; i < m; i++) {
        pro = pro + arr1[i] + arr2[i];
    }

    console.log(pro);
}


function runProgram(input) {
    input = input.trim().split("\n");
    //console.log(input);
    var tc = +input[0];
    var line = 1;
    for (var i = 0; i < tc; i++) {
        var m = +input[line].trim();
        line++;
        var arr1 = input[line].trim().split(' ').map(Number);
        line++;
        var arr2 = input[line].trim().split(' ').map(Number);
        line++;
        tom(m, arr1, arr2)
            //console.log(m,arr1,arr2);
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