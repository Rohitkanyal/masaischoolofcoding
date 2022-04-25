function battleOfOddAndEven(n, arr){
    //write code here
    var sum = 0;
    var sum2 = 0;
    for(rk=1;rk<arr.length;rk++)
    {
        if(arr[rk]%2==0)
        {
            //var sum = 0;
            sum = sum + arr[rk];
            //console.log(sum);
        }
        else
        {
            //var sum2 = 0;
            sum2 = sum2 + arr[rk];
            //console.log(sum2);
        }
    }
    if(sum>sum2)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }
    
}
