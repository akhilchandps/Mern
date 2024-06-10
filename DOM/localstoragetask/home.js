 function addemployee(){

  employeee={

    id :empid.value,
    name:empname.value,
    address:empaddress.value,
    designation:empdesig.value,
    experience:empexp.value,
    salary:empsal.value

  }
   if(employeee.id == "" || employeee.name=="" || employeee.address=="" || employeee.designation=="" || employeee.experience=="" || employeee.salary=="")
   {
     alert("please fill the employee details")
   }
   else if(employeee.id in localStorage)
   {
    alert("Already Exist")
   }
   else
   {
    localStorage.setItem(employeee.id, JSON.stringify(employeee))
    alert("Employee aded successfully")
   }
 
 }

 function search()
{
    var key = emp.value
    console.log(key);
    if(key in localStorage)
    {
      employee=JSON.parse(localStorage.getItem(key))
      console.log(employee);
      result.innerHTML=`<ul class="list-group">
      <li class="list-group-item active" aria-current="true">Employee ID :${employee.id}</li>
      <li class="list-group-item">Name :${employee.name}</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>`

    }
    else
    {
      alert("not found")
    }
}





// if(Employee.id=="" || Employee.name=="" || Employee.address=="" || Employee.designation =="" || Employee.experience =="" || Employee.salary=="") 
// {
//    alert("please fill the form")
// } 
// else
// {

// }

