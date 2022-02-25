var n1 = 1; 
var n2 = 1;
var sum = n1 + n2;
var previous = n1;
var newNumber = sum + previous;

var result = sum;

do{
    previous = sum;
    sum = newNumber;
    newNumber = newNumber + previous;
     if(newNumber % 2 == 0)
    {     
      result += newNumber;   
    }
}while(result < 4000000)

console.log(result);

//4613732
