db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false

//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

function validate(accno)
{
  
    return accno in db ? true : false;
   
}

console.log(validate(1002));



function authenticate(acno,pwd){

    if(validate(acno))
    {
        actualpwd= db[acno].password
        if(pwd == actualpwd)
        {
            console.log("Access granted");
        }
        else{
            console.log("Permission denieded:  password mismatch");
        }
    
    }
    else
    {
        console.log("permission denied 2 : invalid accountno");
    }
    
}

authenticate(10004,1001)




//3 get balance

function fudtransfer(fromaccno,toaccno,amount)
{
  if(fromaccno && toaccno)
  {
    if(db[fromaccno].balance > amount) //10000-500
    {
        db[fromaccno].balance-=amount
        db[toaccno].balance+=amount
        console.log("Transaction completed");
    }
    else{
        console.log("Transaction failed");
    }
    
}
  else{
    console.log("transfer error incorrect account number");

  }

fundtransfer(fromacno,toacno,amount)









}

// fudtransfer(10014,1002,70000)