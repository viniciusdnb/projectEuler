function arrMultiple(numberNature, numberListMultiple)
{
  var arr = [];
  for(let i = 0; i < numberListMultiple; i++)
  {
    if(i % numberNature == 0)
    {
      arr[i] = i;
    }else
    {
      arr[i] = 0;
    }
  }
  return filterArr(arr);
}

function filterArr(arr)
{
//retira valores null - 0 - undefind
  var x = arr.filter(function(a){return a})
  return x;
}

function multipleComun(arr1, arr2)
{
  var y = [];
  for(let i = 0; i < arr1.length; i++)
  {
    for(let b = 0; b < arr1.length; b++)
    {
      if(arr1[i] == arr2[b])
      {
        y[b] = arr2[b];
      }      
    }    
  }
  return filterArr(y);
}

function sumArray(arr)
{
//soma todos os elementod de um array
  var sum = arr.reduce(function(sum,i){return sum+i});
  return sum;
}

var list = 1000;
var number1 = 3;
var number2 = 5;

var arr1 = arrMultiple(number1,list);
var arr2 = arrMultiple(number2,list);

var mc = multipleComun(arr1, arr2);

console.log("soma dos multiplos comum " + sumArray(mc));
console.log("soma de todos os multiplos " + sumArray(arr1)+sumArray(arr2));
console.log("resultado de soma dos multipos menos o multiplos comum "+ (sumArray(arr1)+sumArray(arr2) - sumArray(mc)));






