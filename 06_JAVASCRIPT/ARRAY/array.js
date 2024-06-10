// / array - used to store more variables in a single variables


//array creation
// var vehicle=[]; //declaration

var vehicle =["car","bus","bus","bike","plane",200000,567000] ;//initilization



//1 To fetch an item from an array

//2 To find the length of the array

//3 Fetch every element of the array

//4 To insert a new element in an array

//5  To get index position of values stored in an array

// 1
console.log(vehicle[6]); 
// 2
var len =vehicle.length
console.log(len);

// 3
for(i of vehicle)
{
    console.log(i);
}
// 4
console.log(vehicle.push("jupiter"));
console.log(vehicle);

// 5


for(index in vehicle)
{
    console.log(index);
}


//push another method

vehicle[vehicle.length]="40000"
console.log(vehicle);


