// 1 Create Employee class facilitate the creation of a new employee record.
// 2 Create a scenario does the Employee class display a "Salary Adjustment Failed" message during a salary change  
// 3 How would you create a new instance of the Employee class and set up a record for an employee named 'Alice' with an initial salary of $50000 and an employee ID of 1001
// 4 Can you create a new instance of the Employee class for an employee named 'Bob' with an initial salary of $75000 and an employee ID of 1002  
// 5 Create a function for sort the salary of employee.
// *



class Employee
{
    setEmployeee(id, name, designation, salary)
    {
         this.empid =id
         this.empname =name
         this.empdesgnation=designation
         this.empsalary=salary

         console.log("Print employee details");
         console.log(this.empid,this.empname,this.empdesgnation,this.empsalary);
  
    }
}
e1=new Employee()
e1.setEmployeee(23,"akhil","teacher",23000)