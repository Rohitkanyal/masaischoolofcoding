for(var mo=1; mo<=12;mo++)
  {
    var da=31;
   
if(mo=2)
{
  da=28;  
}
    else if(mo==4||mo==6||mo==9||mo==11)
{
  da=30;
}

    switch(mo)
      {
        case 1: console.log("***********January");
          break;
          case 2: console.log("******Feb");
          break;
          case 3: console.log("*********march");
          break;
          case 4: console.log("********April");
          break;
      }
    for(day=1;day<=da;day++)
      {
        console.log("Month=",mo,"days=",day)
      }
  }