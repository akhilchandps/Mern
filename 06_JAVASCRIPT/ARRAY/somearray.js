//some()- apply function and return true or false 

//[id, name,price,stock]
products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
// 1. is there is anu produts purchase by 20

// // // 2 Is there any product with available stock is > 90

// // //3  Is there any product with available in the range of 10 to 20

// // 4 print all product name available in the range of 20 to 40

console.log(products.some(item=>item[2]<=20));

console.log(products.some(item=>item[3]>=90));

console.log(products.some(item=>item[2]>=20 && item[2]<=90));

products.filter(item=>item[2]>=20 && item[2]<=40) .forEach(item=>console.log(item[1]));