arr=[1, 'chinnu',100]
[2, 'akhil',200]
[3, 'karthik',100]
[4, 'nandu',100]
[5, 'pooja',300]

console.log(arr.reduce((n1,n2) => n1[2]<n2[2]?n1:n2));

console.log(arr.reduceRight((n1,n2) => n1[2]<n2[2]?n1:n2));

//function apply to all elements and returns a single value