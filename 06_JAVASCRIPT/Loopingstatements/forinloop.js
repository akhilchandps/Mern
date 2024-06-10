const student ={

    sname:'akhil',
    class: 7,
    age:12

}
console.log(student);
console.log(student.sname);
console.log(student['sname']);

for( key in student)
{
    console.log(`${key} => ${student[key]}`);
}

const salary ={
    akhil:6000,
    amal:50000,
    ajay:30000

}

for(key in salary)
{
    console.log(`${key} : $${salary[key]}`);
}