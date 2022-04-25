//
function evenArraySum(n, arr){
    var sum = 0;
    for (var rk=0; rk<arr.length;rk++)
    if(arr[rk]%2==0)
    {
    sum = sum + arr[rk];
    
    }
    console.log(sum);
}
