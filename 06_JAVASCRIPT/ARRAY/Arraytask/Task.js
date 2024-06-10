// var arr=[]
// var limit=100

// for(i=1; i<=100; i++)
// {
//   if(i%2===0)
//   {
//     arr.push(i)
//   }
// }


// [10,25,67,45,70,36,50]
// console.log(arr);


var array=[10,25,67,45,70,36,50]
var newarray =[];

for(i of array)
{

    if(i%10==0)
    {
        newarray.push(i)
    }
}
console.log(newarray);

