// Write a function to remove all duplicate elements from an array.

let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr));