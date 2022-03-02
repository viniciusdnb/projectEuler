function divisors(d)
{
    
    var r = 0;
    var arr = [];
    var i = 0;
    while(r <= d)
    {
        if(d % r == 0)
        {
            arr[i] = r;
            console.log(d + " " + r);
            i++;
        }
            
            r++;
    }

    return arr;
}

function sum(n)
{
    
    var c = 0;
    var sum  = 0;
    var arr = []
    while(c <= n)
    {
        
        sum = sum + c;
       
        c++
    }

    return sum
}
function triangleNumberWith500Divisors(n){
var q = 0
do{
    var larr = divisors(sum(q));
    q++
}while(larr.length < n)
}

triangleNumberWith500Divisors(500)

//76576500
