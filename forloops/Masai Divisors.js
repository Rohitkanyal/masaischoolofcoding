//
function masaiDivisors(left, right, k) {
    var sum=0;
    var co=0;
    for(left;left<=right; left++)
    {
        if(left%k==0){
        sum= sum+left;
        co++;
        }
    
            
        
        
    }
    console.log(co);

}
