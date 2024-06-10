class Student
{
    constructor(id, name,age, mark,grade)
    {
        this.sid=id
        this.sname=name
        this.sage=age
        this.smark=mark
        this.sgrade=grade
   
    }

    printStudent() //userdefinedfunction
    {
        console.log(this.sid,this.sname,this.sage,this.smark,this.sgrade);
    }
}

// after object creation constructor invokes automatically
st = new Student(12,"Akhil" ,24,234,"A")

st.printStudent()
