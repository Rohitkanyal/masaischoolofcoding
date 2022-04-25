//
function anotherNested(num) {
    for(rk=1;rk<=num;rk++)
    {
        for(ds=1;ds<=num;ds++)
        {
          for(mh=1;mh<=num;mh++)
          if(ds<mh)
          {
          continue;
          }
          else
          {
            console.log(mh);
            
          }
            
        }
        break;
          
    
         
        
    }
}
