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
    var porcentagem = 0;
    var p = 0;
    var loading = 0;
   
   // console.log("iniciando o calculo");
  for(let i = 2; i < max; i++)
  {
    if(isPrime(i, i))
    {
      //console.log(i);
      arr[key] = i;
      key++;          
        
        porcentagem = key / index * 100;
        
        p = Math.round(porcentagem);

        if(p % 5 == 0)
        {
            console.log("carregando " + p + "%")
        }
         
              
              
          
             
          

        if(arr.length == index)
        {
  
            
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

