//
function patternOfN(N) {
    var co=1;
    
    for(r=1;r<=N;r++)
    {
        var bag="";
        for(k=1;k<=N;k++)
        {
           bag=bag+co+" ";
           co++;
           
           
        }
        
         console.log(bag);
          
    }
     
   
     
 }
 