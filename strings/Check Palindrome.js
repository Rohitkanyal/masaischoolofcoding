//
function checkPalindrome(N, str) {
    // the number which is same starting from both side
    
    
    
    for(rk=0;rk<str.length;rk++)
    {
        var p = "";
        p = p+str[rk];
    }
    //console.log(p);
    
    for(ds=str.length;ds>=0;ds--)
    {
        var q = "";
        q = q +str[ds];
    }
    //console.log(q);
    if(p==q)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
    
   
 }
 