function valid (mail)
{
    return mail.endsWith("@gmail.com")?"valid": "invalid"
}
console.log(valid("akhilchandps@gmail.com"));


function valid(num)
{
 
    return num.length ==10? "valid":"invalid"
}
console.log(valid("7907835875"));
