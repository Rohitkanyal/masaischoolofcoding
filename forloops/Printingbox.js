for(var rk=1;rk<=5;rk++)
  {
    var jack = "";
    for(var ds=1;ds<=10;ds++)
      {
        if(rk==1 || rk==10)
        {jack = jack + "*";}
        else
        {
          if(ds==1||ds==10)
          {
            jack=jack+"*";
          }
          else
          {
          jack = jack+ " ";
          }
        }
      }
    console.log(jack);
  }