//You are given an array of N integers. You need to printYes
function equalTo42(size,arr) {
    //write code here
    var flag=false;
    for(var rk=0;rk<arr.length;rk++)
    {
        if(arr[rk]=="42")
        {
            flag=true;
        }
    }
    if(flag==true)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}
