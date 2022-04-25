//
function averageOfAll(n, arr){
    //write code here
    var sum = 0;
    var co=0;
    for(rk=0;rk<n;rk++)
    {
        //var sum = "";
        sum = sum+arr[rk];
        co++;
        //console.log(sum);
    }
    //console.log(sum);
    var avg = sum/co;
    console.log(avg);
    
}
