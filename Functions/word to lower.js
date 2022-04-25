//

// Problem-5

// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input
// ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output
// ["ma", "sa", "i", "sch", "ool"]




var str = ["MA", "SA","I","SCH","OOL"]
var c =0;
for(var rk=0;rk<str.length;rk++)
  {
    if(str[rk]=="MA")
    {
      console.log("ma");
    }
    if(str[rk]=="SA")
    {
      console.log("sa");
    }
    if(str[rk]=="I")
    {
      console.log("i");
    }
    if(str[rk]=="SCH")
    {
      console.log("sch");
    }
    if(str[rk]=="OOL")
    {
      console.log("ool");
    }
  }

