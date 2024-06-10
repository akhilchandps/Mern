function login()
    {
      const doc= document.getElementById('insert').value
      console.log(doc);
       
      localStorage.setItem("username",doc)
      window.location="./home.html"
       
      var data=localStorage.getItem("username")
      console.log(data);

     parent.innerHTML=`<h1>WELCOME ${data} </h1>`

    }