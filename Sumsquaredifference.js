var c = 1;
var sum = 0;
var sumq = 0;
while(c <= 100)
{
    sum = sum + c*c;
    sumq = sumq + c;
    c++;

    
}

sumq = sumq * sumq - sum;
console.log(sumq)

//25164150
