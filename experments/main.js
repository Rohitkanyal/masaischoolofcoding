for(var num=13;num<=100;num++)
var co=0;

for(var r=1; r<=num; r++)
  {
    if(num%r)
    {
      co++;
    }
  }
if(co==2)
  {
    console.log(num,"is prime");
  }
else
{
  console.log(num,"is not prime");
}
