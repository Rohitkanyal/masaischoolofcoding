//
function yourFirstNested(num) {
    // Write code here
    for(rk=1;rk<=num;rk++)
    {
        var jack="";
        for(ds=1;ds<=num;ds++)
        {
            jack=jack+ds+" ";
        }
        console.log(jack);
    }
}
