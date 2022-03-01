function isPrime(numero, max)
{
  var result = 0;
  

  for(let i = 0; i < max; i++)
  {
     if(numero % i == 0)
     {
        result++;
              
     }
  }  
  if(result > 2)
  {
    return false;
  }else{
    return true;
  }
  
}
   
function teste()
{
  var arr = [];
  var max = 150000;
  var key = 0;
  for(let i = 0; i < max; i++)
  {
    if(isPrime(i, max))
    {
      console.log(i);
      arr[key] = i;
      key++;
    }
  }
  return arr;
  
}

console.log(teste(10001))
