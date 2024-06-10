class Bank

{
    constructor(accno,name,balance,phno)
    {
       this.baccno=accno
       this.bname=name
       this.Bbalance=balance
       this.bphno=phno
       console.log("Account is created");
    }

    deposit(amount)
    {
        this.balance= this.balance+amount
        console.log(`${amount} credited successfully`);
    }
    withDraw(amount)
    {
       if(this.balance>amount)
       {
        console.log("transaction Failed");
       }
       else
       {
         this.balance= this.balance-amount
         console.log(`${amount} amount debitdd successfully`);
       }
   
    }
    balanceEnquiry()
       {
        console.log(this.Bbalance);
        
       }
}


bank =new Bank(2003,"Akhil_ChandPS",5000,7907835875)
bank.deposit(500)
bank.withDraw(4000)
bank.balanceEnquiry()

bank =new Bank(2603,"Alen",5000,7904663575)
bank.deposit(500)
bank.withDraw(4000)
bank.balanceEnquiry()