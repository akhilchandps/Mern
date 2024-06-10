function calculateArea (...args)
{
    if(args.length ==1)
    {
        r=5
        area=Math.PI*r*r
      console.log("calculate area" ,area);
    }
    else if(args.length == 2)
    {
        l=4
        b=6
       area =l*b
       console.log("Area of rectangle",area);
    }
    else if(args.length == 3)
    { 
      a=3
      b=4
      c=5
      area =a*b*c/2
      console.log("Area of triangle",area);
       
    }
    else if(args.length == 4)
    { 
      
      console.log("Invalid number of arguments");
       
    }
}

calculateArea(5)
calculateArea(4,6)
calculateArea(3,4,5)
calculateArea(2,4,6,8)

