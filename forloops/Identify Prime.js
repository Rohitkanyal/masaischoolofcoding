//
function identifyPrime(num) {
    var c=0;
    for(var i=1; i<=num;i++)
    {
        if(num%i==0)
        {
            c++;
        }
    }
    if(c==2)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No")
    }
}
