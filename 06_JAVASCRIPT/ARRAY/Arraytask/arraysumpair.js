var arr=[2,3,4,5]
for(i of arr)
{
    for(j of arr)
    {
        if(i+j==9)
        {
            console.log(`pairs are: ${i}+${j}`);
        }
    }
}