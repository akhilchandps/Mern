
 
const arr = [1, "array", undefined, null,  5, false, "", 3, NaN];
const result = arr.filter(Boolean);   // = > [1, "test", 5, 3]
console.log(result);