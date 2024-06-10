accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:6000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary', mode:'gpay'
            },
            {
                to:1001,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:7000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1000,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    }
]



//1 total number of accounts
//2 print account number whose account type is savings
//3  print the balance of account number 1000
//4 print all gpay transactions
//5 print all transactions whose amount > 5000
//6 print all credit transactions of account 1002
//7 print all debit transactions of account 1002
//8 print the highest balance account details
//9 print transaction history of 1002
//10 print transaction history of account 1003

//1 total number of accounts

var total = accounts.length

console.log(total);


//2 print account number whose account type is savings

console.log(accounts.find(acc=> acc.ac_type =="savings").acno);

//3  print the balance of account number 1000

console.log(accounts.find(acc=> acc.acno == 1000).balance);

//4 print all gpay transactions

console.log(accounts.map(data=> data.transaction).flat().filter(t=>t.mode=="gpay"));


//5 print all transactions whose amount > 5000

console.log("\n print all transactions whose amount > 5000");

console.log(accounts.map(data=> data.transaction).flat().filter(t=>t.amount> 5000));


//6 print all credit transactions of account 1002

console.log(" \n credit transactions ");

creditTrans= accounts.map(data =>data.transaction).flat().filter(t=>t.to == 1002);
console.log(creditTrans);


//7 print all debit transactions of account 1002


console.log(" \n dedit transactions ");
debitTrans =accounts.find(data => data.acno==1002).transaction;
console.log(debitTrans);


//8 print the highest balance account details

console.log(accounts.reduce((a,b) => a.balance > b.balance ? a:b));


//9 print transaction history of 1002


//10 print transaction history of account 1003


transactionHistory ={

    credit:creditTrans,
    debit:debitTrans
}

console.log(transactionHistory);