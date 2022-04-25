//
function divisibleByKII(num,k) {
    var sum=0;
    var co=0;
    for(var i=1; i<=num; i++)
    {
        if(i%k==0){
            
            sum=sum+i;
            
            co++;
        }
        
    }
    console.log(sum);
}

