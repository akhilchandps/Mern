

class Employee
{
    setEmployeee(id, name, designation, salary)
    {
         this.empid =id
         this.empname =name
         this.empdesgnation=designation
         this.empsalary=salary

         console.log("Print employee details");
  
    }

    printEmoloyee()
    {
        console.log(this.empid,this.empname,this.empdesgnation,this.empsalary);
    }
}

emp=new Employee()
emp.setEmployeee(23,"akhil" ,"thiruvalla",30000)
emp.printEmoloyee()

emp2=new Employee()
emp.setEmployeee(26,"amal" ,"kottayam",50000)
emp.printEmoloyee()
