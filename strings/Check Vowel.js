//
function checkVowel(N, str) {
    //write code here
    var c=0;
    for(var rk=0;rk<str.length;rk++)
      {
          if(str[rk]=="a"||str[rk]=="e"||str[rk]=="i"||str[rk]=="o"||str[rk]=="u"||str[rk]=="A"||str[rk]=="E"||str[rk]=="I"||str[rk]=="O"||str[rk]=="U")
          {
              c++;
          }
          
      }
      if(c>0)
      {
      console.log(true);
      }
      else
      {
          console.log(false);
      }
  }
  