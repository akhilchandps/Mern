var input=4
str="" // empty string
i=1
while(i<=4) //i<=4 T 2<=4 T
{
    str+=input //str=str+input str=""+4 str=4+4  str=44+4 str=444+4
    console.log(str); //3 2 1
    i++  //2 3 4 5
}

for(row=1; row<=5; row++) //r=1 1<=4 r=2
{
    str="" //empty nstring

for(col=1; col<=5; col++) //c=1 i<=4  c=2 2<=4   c3   c4 c5
{
    str+=row //str=str+row   str=""+1, 1+1 11 111 1111 

} 
console.log(str);

}

for(row=1; row<=5; row++) //r=1 1<=4 r=2
{
    str="" //empty nstring

for(col=1; col<=5; col++) //c=1 i<=4  c=2 2<=4   c3   c4 c5
{
    str+="#" //str=str+row   str=""+1, 1+1 11 111 1111 

} 
console.log(str);

}



for(row=1; row<=4; row++)
{
    strr="";
for(col=1;col<=row; col++)
{
    strr+="*"
   
}
console.log(strr);  

}