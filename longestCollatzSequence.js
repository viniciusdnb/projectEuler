function collatz(n)
{
    var i = 1;
    var arr = [n];
    
    while(n != 1)
    {
        if(n % 2 != 0)
        {
            n = 3 * n + 1;			
            arr[i] = n;
            i++;
        }
        else
        {
            n = n /2;            
            arr[i] = n;
            i++;
        }
    }
    
    return arr;
}

function calculo(n)
{
    arr = [];
    
    for(let i = 1; i <= n; i++)
    {		
        arr[i] = collatz(i).length;		
    }

    return arr;
   
}

function longestCollatzSequence(arr) 
{
  var len = arr.length;
  var max = 0;
  var key; 

  while (len--) 
  {//começa a percorrer o array pela ultima posicao e sobindo
    if (arr[len] > max) 
    {//verifica se o valor do elemento na posição do array é maior que o max 
      max = arr[len];
      key = len;
    //a cada interaçao do array caso o valor seja maior que o max encontrado anteriormente é substituido pelo valor atual 
    }
  }
  return  "numero: " + key + " sequencia de:  " + max ;
}

arr = calculo(999999);
longestCollatzSequence(arr)

//'numero: 837799 sequencia de:  525'
