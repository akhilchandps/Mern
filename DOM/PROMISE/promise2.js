var pro= new Promise((resolve, reject)=>
{
    let lotnum=5;
    let prizenum= Math.floor(Math.random()*10);
    if(lotnum == prizenum)
    {
        resolve("you won the lottery")
    }
    else
    {
        reject("Better luck next time")
    }
}

);

pro.then(msg=>console.log(msg)).catch(err=>console.log(err))