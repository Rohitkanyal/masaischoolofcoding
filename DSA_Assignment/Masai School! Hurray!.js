//
function masaiSchoolHurray(N) {
    // Write code here
    for(var rk=1;rk<=N;rk++)
    {
        if(rk%5==0&&rk%7==0)
        {
            console.log("School");
        }
        else if(rk%7==0)
        {
            console.log("Masai");
        }
        else if(rk%5==0)
        {
            console.log("School");
        }
        else
        {
            console.log("Hurray!");
        }
        
    }
}
