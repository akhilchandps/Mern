//generate a new arraya with values are substracted from the total sum of the values
//input var arr=[4,5,6]
//output var arr=[11,10,9]

var arr=[4,5,6]

var total=15
for( let i in arr)
{
    arr[i]=total-arr[i]
}
console.log(arr);