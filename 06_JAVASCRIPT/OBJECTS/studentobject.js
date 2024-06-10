//Create a student object having properties as id,name,course,totalmark,year

//1 Print name of student object
//2 Check rank key is present in student object
//3 add qualifed for higher education or not and update 
//4 Mark incremented by 10 
//5 Print details of student object one by one


const student ={

    id:12,
    name:'akhil',
    course:'MCA',
    totalmark:1200,
    year:2023
}

console.log(student.name);

console.log("rank" in student);

student.qualified=true
console.log(student);

student.qualified=false
console.log(student);

student.totalmark+=10
console.log(student);

for(key in student)
{
    console.log(`${key} : ${student[key]}`);
}