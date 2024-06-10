a=[ 
    
    [10,12],
     [12,13],
     [30,17],
     [18,19],
    [21,22]

]
//print all numbers> 10 

console.log(a);
console.log(a.flat()); //single array
console.log(a.flat().filter(num=>num>10));

//Deeply nested array
//you can pass a large depth value  to complete flatten deeply nested array

const deeplyNestedArray =[1,[2,[3,[4, [5]]]]]

console.log(deeplyNestedArray.flat(Infinity));

//using a flat method with a array contains empty slot

const arrayWithEmptySlots =[1, , ,[2,3] , ,[4,[5,6]]]
console.log(arrayWithEmptySlots.flat());
