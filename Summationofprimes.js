function listaAbaixoDe(number, posicao=false)
{
    //lista todos os numeros primos abaixo de um numero passado como parametro
   
    var c = 2;
    var p = 1;
    var sum = 0;
    var porcentagem = 0
   
  
    while(c <= number)
    {   
        porcentagem = (c / number)// * 100;

       // porcentagem = Math.round(porcentagem);

       
            console.log("aguade estamos carregando... " + porcentagem  * 100+ "%")
        
        
        result = 0;
        
        for(let i = 1; i <= c; i++)
        {
            
            if(c % i == 0)
            {
                result++;
            }

            if(result > 2)
            {
                
                break;
            }
            
        }
        
        if(result <= 2)
        {
            if(posicao && p == posicao)
            {
                 console.log( "posição "+ p + " numero primo: " + c + "\n");
                return;
            }
            
            sum = sum + c;
           
         p++;          
        }

        
        
        c++; 
    } 
   console.log(sum + "\n");
}
listaAbaixoDe(2000000);
