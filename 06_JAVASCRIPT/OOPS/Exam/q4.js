// Write a function calculateAverage that takes an array of numbers as input and returns the average value

function calculateAverage(arr)
{
  let sum=0
   for(let i=0;i<arr.length;i++)
   {
    sum+=arr[i]
   }
   return sum/arr.length
}
var  arr=[1,2,3,4,5]
console.log(calculateAverage(arr));