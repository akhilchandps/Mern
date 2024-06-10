var points = [40, 100, 1, 5, 25, 10];

// Given an array of numbers and perform sorting
// 1.ascending order the numbers 
// 2.descending order the numbers
// 3.find the lowest number
// 4.find the highest number


console.log("Ascending order",points.sort((a,b)=>a-b));
console.log("Descending order",points.sort((a,b)=>b-a));

console.log(points.sort((a,b)=>a-b));
console.log("Lowest Element", points[0]);
console.log("highest eklement",points[5]);
