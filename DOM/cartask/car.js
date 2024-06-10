function storeitem()
{
    car ={

        brand:carbrand.value,
        price:carprice.value,
        key:carkey.value
    }

    if(car.brand=="" || car.price=="" || car.key=="")
    {
        alert("please enter the details")
    }
    else if(car.key in localStorage)
        {
            alert("Already added")
        }
        else{
            localStorage.setItem(car.key,JSON.stringify(car))
            alert("Added Successfully")
        }
    }



function retreiveitem()
{
    var data=display.value
    console.log(data);
    if(data in localStorage)
    {
        set=JSON.parse(localStorage.getItem(data))
        console.log(set);
        exp.innerHTML=`<ul class="list-group">
        <li class="list-group-item">brand:${set.brand}</li>
        <li class="list-group-item">price: ${set.price}</li>
        <li class="list-group-item">Key: ${set.key}</li>
      </ul>`
    }
    else
    {
        alert("Not found")
    }
}


function remove()
{
    data2=rm.value
    console.log(data2);
    if(data2 in localStorage)
    {
        itemremove=localStorage.removeItem(data2)
        alert("details removed")
    }
    else{
        alert("key not found")
    }
}

 function clearrecord()
 {
    localStorage.clear()
    alert("All records are cleared")
 }