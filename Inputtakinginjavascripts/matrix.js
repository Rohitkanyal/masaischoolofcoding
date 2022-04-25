function runProgram(input) {

    input = input.trim().split("\n")
    var size = + input[0]
    var mat=[]

    for(var i=0;i<size;i++)
    {
        mat.push(input[i+1].trim().split(" ").map(Number))
    }
    console.log(mat)
    sumOfMatrix(mat)
}

function sumOfMatrix(mat)
{
    
}





if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

