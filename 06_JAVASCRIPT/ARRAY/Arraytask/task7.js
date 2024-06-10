var nestedArray =[
    [5,6,7,-2],
    [-5,-6,-7],
    [8,9,10],
    [3,5,2,1,4],
    [-3,5,2,1,],
    [4,2,6,8],
]

//1. Find Maximum: Write a function to find the maximum number in a nested array of integers.

//2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.

//3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.

//4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.

//5. Sort Subarrays: Implement a function that sorts each subarray in a nested array of numbers.

//6. Flatten Nested Array: Write a function to flatten a nested array to a single-level array.

//7. Remove Duplicates: Create a function that removes duplicate elements from the nested array.

//8. Reverse Subarrays: Implement a function to reverse each subarray within the nested array.

//9. Filter Even Numbers: Write a function to filter out all even numbers from the nested array.

//10. Find Longest Subarray: Create a function that returns the longest subarray within the nested array.



//1. Find Maximum: Write a function to find the maximum number in a nested array of integers.

// function maximum(nestedArray)
// {
//     max=0;
//     for( i of nestedArray)
//     {
//         for( j of i)
//         {
//             if(max<j)
//             {
//                 max=j
//             }
//         }
//     }
//     return max;
// }
// console.log("Maximum Number:",maximum(nestedArray));

// //2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.

// function calculate (nestedArray)
// {
//     avg=0
//     count=0
//     let temp;
//     for(i of nestedArray)
//     {
//         for(j of i)
//         {
//             avg=avg+j;
//             count++
//         }
//         temp=avg/count
        
//     }
//     return temp
// }

// console.log("average:",calculate(nestedArray));

//3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.

// function neg(nestedArray)
// {
//     count=0
//     for( i of nestedArray)
//     {
//         for(j of i)
//         {

//          if(j<0)
//         {
//            count++
//         }

//         }
      
//     }
//     return count
// }
// console.log("Total negative number:",neg(nestedArray));


//4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.
function arraySum(i) {
    var sum=0; 
    for(var a=0;a<i.length;a++){ // missing var added
        if(typeof i[a]=="number"){
            sum+=i[a];
        }else if(i[a] instanceof Array){
            sum+=arraySum(i[a]);
        }
    }
    return sum;
}
console.log(arraySum(i));