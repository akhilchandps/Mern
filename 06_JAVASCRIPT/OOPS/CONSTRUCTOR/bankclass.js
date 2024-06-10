class Bank{
    db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}


//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false



//1 create a function for validate account number. To validate account check

validateAccount(ac)
{
    return ac in this.db? true:false;
}
//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

authenticate(acno,pwd)
{
  if(acno in this.db){
    this.password=this.db[acno].password
    if(pwd==this.password)
    {
        console.log("Access granted");
    }
    else{
        console.log("permission denied invalid password");
    }
  }
  else
  {
    console.log("inalid accountnumber");
  }

}


getbalance(acno)
{
    return this.validateAccount(acno)? this.db[acno].balance:'Inavalid ccountnumber'
}



fudtransfer(fromaccno,toaccno,amount)
{
  if(fromaccno in this.db && toaccno in this.db)
  {
    if(this.db[fromaccno].balance > amount) //10000-500
    {
        this.db[fromaccno].balance-=amount
        this.db[toaccno].balance+=amount
        console.log("Transaction completed");
    }
    else{
        console.log("Transaction failed");
    }
    
}
  else{
    console.log("transfer error incorrect account number");

  }
}

}


b1 = new Bank()

console.log("validate",b1.validateAccount(1000));

b1.authenticate(1000,1002)
console.log(b1.getbalance(1000));
console.log(b1.getbalance(1002));

b1.fudtransfer(1000,1002,500)
console.log(b1.getbalance(1000));
console.log(b1.getbalance(1002));