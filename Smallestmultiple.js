function numberList(quantity)
{
  var numberList = [];
  var n = 0;
  for(let i = 0; i <= quantity ; i++)
  {
    numberList[i] = n;
    n++;
  }
  return numberList;
}

function division(numberList, divider)
{
  
  var arr = [];
  
  for(let i = 0; i <= numberList.length; i++)
  { 
   
    var ar = [];
    
    for(let a = 1; a <= divider; a++)
    { //console.log(number +"/"+d+" ="+number/d);
      //ar[a] = numberList[i] +"/"+a+" ="+numberList[i]/a;
      ar[a] = numberList[i]/a;
      arr[i] = ar.filter(function(a){return a});
    
    }
     
  }
  return arr.filter(function(a){return a});
}


function isIntegerDivisio(d)
{
    var arr = [];
    var a = 0;
    for(let z of d)
    {
     
      if(Number.isInteger(z))
      {
        arr[a] = z       
        a++;
      }
    }
   return arr;
  

}

function verify(number, qdivi)
{
    var list = numberList(number);
    
    var divi = division(list, (qdivi+1));
    //console.log(divi)
    for (let index = 0; index < (number + 1); index++) {
   
      if(isIntegerDivisio(divi[index]).length == qdivi){
            console.log(index + " = " + isIntegerDivisio(divi[index]));
      }
      
  }
}

verify(250000000,20)
  
