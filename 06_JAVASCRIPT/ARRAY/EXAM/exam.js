// 1 Car Booking Data
// [id , brand , model , type , pricePerDay, available]


 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan',50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Seda' ,45 ,12]
];

//1. print all car brands

carBooking.forEach(a=>console.log(a[1]));

//2. print total number odf car available

var total= carBooking.length

console.log(total);

//3. print sedan car details

for( i of carBooking)
{
    if(i[3]==="Sedan")
    {
        console.log(i);
    }
}

//print cars price per day greater than 60

for( i of carBooking)
{
    if(i[4]>60)
    {
        console.log(i);
    }
}

//print details of 'jeep wrangler'

 for( i of carBooking)
 {
    if((i[1]=="jeep") && (i[2]=="Wrangler"))
    {
        console.log(i);
    }
 }


 //sort car based on the descending order of the price of the day


//  console.log(carBooking.sort());
// console.log(carBooking[4].sort((a,b)=>b-a))
// console.log(carBooking[4].reverse());


//find the car with most available car
console.log(carBooking.find(car=>car[5]>10));

//9. calculate the revenue if all car rented for a day


//10 count the numjber of sedan car

for( i of carBooking)
{
    if(i[3]=="Sedan")
    {
       
        console.log(i.length);
    }
}

//11 find the car with the earliest availability

//12 print all unique car brands

carBooking.forEach(a=>console.log(a[1]));