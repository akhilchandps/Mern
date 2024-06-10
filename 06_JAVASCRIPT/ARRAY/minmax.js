//To hold an expenses , and 

//Find total expense
//Find maximum expense
//Find minimum expense



var expenses = [12000,20000,34000,10000,28000,15000,50000];



sum=0
for(i of expenses)
{
    sum=sum+i
}
console.log(sum);

 
maxexp=0
for(j of expenses)
{
    if(maxexp<j)
    {
      maxexp=j
    }
}
console.log("max ecpense is",+maxexp);


minexp=expenses[0];

for(let amount of expenses)
{
    if(amount<minexp)
    {
      minexp=amount;
    }
}
console.log("mini expense is:",+minexp);


// sunstracted from the sum of the variable

// input var arr = a[4,5,6] (sum=15)



var arr= [4,5,6];
var total=15

for(let i in arr ) //i=0, i=2 i=3
{
 arr[i]=total-arr[i]; //arre[1]= 15-4 =11
}
console.log(arr);