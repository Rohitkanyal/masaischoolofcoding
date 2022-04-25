//Given an array,arrwhich hasNintegers.

function smallestAndLargestOfAll(n, arr){
    //write code here
    var pad1 = -Infinity;
    var pad2 =  Infinity;

    
    for(rk=0;rk<arr.length;rk++)
    {
        if(arr[rk]>pad1)
        {
            pad1=arr[rk];
            
            //console.log(pad1);
            
        }
        if(arr[rk]<pad2)
        {
            pad2=arr[rk];
            
            //console.log(pad2);
        }
    } 
    console.log(pad2);
    console.log(pad1);
}
