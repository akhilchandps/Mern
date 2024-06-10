 
 function reverse(array)
 {
    var a=[]
    while(array.length)
    {
        a.push(array.pop());
    }
    return a;
 }
 console.log(reverse([1,2,3,4,5,6,7,8]));