const count =true;

let countvalue = new Promise(function (resolve, reject)
{
    if(count)
    {
      resolve("There is a count value")
    }
    else{
        reject("There is no count value")
    }
});

console.log(countvalue);