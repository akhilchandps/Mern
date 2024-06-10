var arr=[10,24,5,30,50,65,32]


var element=32
flag=0
   for(i of arr)
   {
    if(i==element)//10==2 //24==2//5==2//3-==2
        {
            flag=1
            break
        }
   }

   console.log(flag==1?"Number is found":"Number is not found");

   