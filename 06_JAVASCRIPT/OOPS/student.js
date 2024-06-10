class Student
{
    setStudent( rollno,name,mark,grade)
    {
       this.srollno=rollno
       this.sname=name
       this.smark=mark
       this.sgrade=grade

       console.log("Print Student details");
    }

    printStudent()
    {
        console.log(this.srollno,this.sname,this.smark,this.sgrade);
    }
}

console.log("\n------------------------------------");
st= new Student
st.setStudent(24,"saji",1200,"A")
st.printStudent()

console.log("\n------------------------------------");
st2= new Student
st.setStudent(25,"sabu",2500,"A")
st.printStudent()