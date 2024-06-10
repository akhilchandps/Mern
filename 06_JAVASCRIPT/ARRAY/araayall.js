employee=[
    [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1008,'Nihaan','Developer','Kochi',25000,3],

]

//1 Print all employee name 
//2 Print total number of employee
//3 Print developer employee details
//4 Print all employee details whose salary > 30000
//5 Print details of employee Laisha
//6 Sort employee based on descending order of salary
//7 sort employee based on ascending order of experience


console.log("\n Print all employee name ");

for(i of employee)
{
  console.log(i[1]);
}


console.log("\n 2 Print total number of employee");

var len= i.length
console.log(len);

console.log("\n 3 Print developer employee details");

for(let  emp of employee)
{
    
     if(emp[2]=="Developer")
     {
        console.log(emp);
     }

    }
    

console.log("\n 4 .Print all employee details whose salary > 30000");
    for(sal of employee)
    {

        if(sal[4]>30000)
        {
            console.log(sal);
        }
    }
    
console.log("\n //5 Print details of employee Laisha");
    for(empe of employee)
    {
        if(empe[1] == "Laisha")
        {
            console.log(empe);
        }
    }


    //6 Sort employee based on descending order of salary

    employee.sort((emp1,emp2) => emp2[2]-emp1[1]);
    console.log(employee);

    //7 sort employee based on ascending order of experience

    employee.sort((emp1,emp2) => emp1[5]-emp2[5]);
    console.log(employee);

    // employee.sort((emp1,emp2)=>emp2[4]-emp1[4]);  
// console.log(employee);
// The sort method takes a comparison function as an argument.

// (emp1, emp2) => emp2[4] - emp1[4]: This is an arrow function that serves as the comparison function for the sort method.
//It takes two parameters, emp1 and emp2, (compare)

// emp2[4] - emp1[4]: This exp calculates the diff between the salaries of emp2 and emp1. 

//The result of this subtraction determines the order in which the elements will be sorted.

// If the result is negative, emp1 comes before emp2.
// If the result is positive, emp2 comes before emp1.
// If the result is zero, the order remains unchanged.

// The sort method uses the comparison function to determine the correct order of elements based on the calculated differences in salary. 

//In this specific case, it sorts the employee array in descending order of salary, placing employees with higher salaries at the beginning of the array.
// employee.sort((emp1,emp2)=>emp2[4]-emp1[4]);  
// console.log(employee);
// The sort method takes a comparison function as an argument.

// (emp1, emp2) => emp2[4] - emp1[4]: This is an arrow function that serves as the comparison function for the sort method.
//It takes two parameters, emp1 and emp2, (compare)

// emp2[4] - emp1[4]: This exp calculates the diff between the salaries of emp2 and emp1. 

//The result of this subtraction determines the order in which the elements will be sorted.

// If the result is negative, emp1 comes before emp2.
// If the result is positive, emp2 comes before emp1.
// If the result is zero, the order remains unchanged.

// The sort method uses the comparison function to determine the correct order of elements based on the calculated differences in salary. 

//In this specific case, it sorts the employee array in descending order of salary, placing employees with higher salaries at the beginning of the array.