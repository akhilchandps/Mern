weatherdata=[
    {district:'Thrissur',weather:28},
    {district:'Palakkad',weather:36},
    {district:'Kozhikod',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakkad',weather:31},
    {district:'Kozhikod',weather:34},

] //array of objects.

//output { Thrissur: 29, Palakkad: 36, Kozhikod: 34 }


output={}

for(let data of weatherdata)
{
     distname= data["district"]
     currenttemp=data["weather"]
if(distname in output)
{
  oldtemp= output[distname]
  if(currenttemp > oldtemp)
  {
   output[distname]=currenttemp;
  }
}
else
{
    output[distname]=currenttemp
}
}

//object to array conversion
console.log(output);

console.log(Object.entries(output));

console.log(Object.entries(output).sort((n1,n2) => n2[1] - n1[1]));