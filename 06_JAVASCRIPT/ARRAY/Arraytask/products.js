// [id,name,price,stock]
products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. Display all products name
//2. Display list of products under 50rs 
//3. Print details of 'oreo' product
//4. Display most coslty product details
//5. Display out of stock product details
//6. Display print details of 4th product 
//7. sort products details based on product availability stock by desending
//8. Display products having maximum availabile stock
//9. Display products having minimum availabile stock
//10. Sort the products based on rate by ascending order


//1. Display all products name

products.forEach(a=>console.log(a[1]));

//2. Display list of products under 50rs 

console.log(products.filter(p=>p[2]<50));

//3. Print details of 'oreo' product
 
console.log(products.find(p=>p[1]=="oreo"));

//4. Display most coslty product details

console.log(products.reduce((n1,n2) => n1[2] > n2[2]? n1:n2));

//5. Display out of stock product details

console.log(products.filter(products => products[3]==0))

//6. Display print details of 4th product 

console.log(products.find(products => products[0]==4));

//7. sort products details based on product availability stock by desending

console.log(products.sort((a,b)=>b[3]-a[3]));

//8. Display products having maximum availabile stock

console.log(products.reduce((n1,n2) => n1[3]>n2[3]? n1:n2));

//9. Display products having minimum availabile stock

console.log(products.reduce((n1,n2) => n1[3]>n2[3]? n2:n1));

//10. Sort the products based on rate by ascending order


console.log(products.sort((a,b)=>a[2]-b[2]));














