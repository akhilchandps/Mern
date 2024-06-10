a=[10,10,20,20,30,30,40,40,50,50,50,60]

numbercount= { }

a.map(number=> number in numbercount ? numbercount[number]+=1 : numbercount[number]=1)

console.log(numbercount);