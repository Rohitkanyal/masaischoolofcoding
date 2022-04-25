//
// assignment
//function Problem 1: Create a function to check if a number is Prime or Not 

function Prime(n)
  {
    var co=0;
    for(rk=1;rk<=n;rk++)
    {
      {
        if(n%rk==0)
        
        {
         co++; 
        
        }
        //co++;
      }
    }
    if(co==2)
    {
      console.log("Prime");
    }
    else
    {
      console.log(n,"Not");
    }
  } 

Prime(7);

//with return


var x = Prime(7);
if (x==true)
{
  console.log("prime");
}
else
{
  console.log("not");
}



