function isPrime(numero, max)
{
  var result = 0;
  

  for(let i = 0; i <= max; i++)
  {
     if(numero % i == 0)
     {
        result++;
              if(result > 2)
              {
                return false;
              }
         }
  }  
  return true
  
}
   
function gerarArr(index)
{
  var arr = [];
  var max = index * 100;
  var key = 0;
    var p = 0;
    var l = 0
   // console.log("iniciando o calculo");
  for(let i = 2; i < max; i++)
  {
    if(isPrime(i, i))
    {
      //console.log(i);
      arr[key] = i;
      key++;

        if(arr.length == index)
        {
            //console.log("100 % calculado")
            return arr;
        }   
    }
     
  }
    
  
}

function retornaPosicao(posicao)
{
    var arr = gerarArr(posicao);
    return arr[posicao -1];
}

