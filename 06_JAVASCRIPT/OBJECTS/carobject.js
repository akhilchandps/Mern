//create an object for car whose properties are {name, model, manufacturer,price}


//1 Display manufacturer information for the car
//2 Check whether the model is present or not
//3 Add property varient
//4 Add property colour


const car ={

    name:'akhil',
    model:'maruthi',
    manufacture:'honda',
    price: 20000000
}

console.log(car.manufacture);

console.log("model" in car);
console.log(car);

car.varient="manual"
console.log(car);

car.color="blue"
console.log(car);

//add more values in varient
car['varient']=['manual']//array

car['varient'].push('automatic')
console.log(car);