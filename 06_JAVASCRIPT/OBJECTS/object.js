var employee ={

    name:'akhil',
    age:23,
    designation:'Developer',
    salary:35000,
    experience:4
}
//display employee object
console.log(employee);
//print employee salary
console.log(employee.salary);
//print employee age
console.log(employee["age"]);

//check whether a particular key is present in thge employee object

console.log("experience" in employee);
console.log("data" in employee);

//add or insert new key/value pairs in object

employee.gender="male"
console.log(employee);

// or

employee["isvaccinated"]=true;
console.log(employee);

//add vaccine
employee.vaccine="covidshield"
console.log(employee);

//update vaccine

employee.vaccine="covaccine"
console.log(employee);

//increment salary by 5k

employee.salary+=5000
console.log(employee);

//print key/value pairs one by one

for(let key in employee)
{
    console.log(`${key}: ${employee[key]}`);
}
//delete the key from an employee

delete employee.experience
console.log(employee);