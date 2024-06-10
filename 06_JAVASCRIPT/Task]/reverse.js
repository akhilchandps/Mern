var input=123
str=""
while(input!=0)
{
    lastdigit=input%10; //Get right most digit  ex. 123%10 =>12.3=> 3// 12%10 =>1.2=>2 //1%10 =>0.1=>0.1
    str+=lastdigit //321
    input=Math.floor(input/10)//remover right most digit ex. 123 => 12.3 =>12 //12=>1.2
    
}
console.log(str);