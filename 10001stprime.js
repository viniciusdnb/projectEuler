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
   
function teste(index)
{
  var arr = [];
  var max = index * 100;
  var key = 0;
    var p = 0;
    var l = 0
    console.log("iniciando o calculo");
  for(let i = 0; i < max; i++)
  {
    if(isPrime(i, max))
    {
      //console.log(i);
      arr[key] = i;
      key++;
    }
      //console.log(i / max);
      l = (i/ max) * 100
      if(l == p)
      {
          console.log("aguarde calculo em " + (p) + "%");
          p = p + 10;
      }

      //console.log(p);
   /* if(i / max == 0.5 )
     {
         console.log(" aguarde calculo em 50%");
     }

      if(i / max == 0.80)
      {
          console.log("aguarde calculo em  80%")
      }*/
  }
    console.log("100 % calculado")
  return arr[index];
  
}

console.log(teste(10001))
