covid_data=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]


//1. Find which district having highest +ve case?
//2. Find which district having highest 1st dose vaccine?
//3. Find which district having lowest death rate?
//4. Sort the data with +ve case in desending order
//5. sort district with 1st dose vaccine
//6. print total number of curred cases
//7. print total curred cases in Edukki
//8. Is any district having more than 27000 +ve cases -


console.log(covid_data.reduce((n1,n2) => n1[2]>n2[2]? n1:n2));

//2. Find which district having highest 1st dose vaccine?

console.log(covid_data.reduce((n1,n2) => n1[5]>n2[5]? n1:n2));

//3. Find which district having lowest death rate?

console.log(covid_data.reduce((n1,n2) => n1[3]<n2[3]? n1:n2));

//4. Sort the data with +ve case in desending order

console.log(covid_data.sort((a,b)=>b-a));

//5. sort district with 1st dose vaccine

(covid_data.sort((a,b)=>a[5]-b[5])).forEach(item=>console.log((item[1])));

//6. print total number of curred cases

console.log(covid_data.reduce((n1,n2) => n1[4]+n2[4]));

//7. print total curred cases in Edukki

covid_data.find(covid_data=>covid_data[1]=="idukki")
console.log(covid_data);

//8. Is any district having more than 27000 +ve cases -

console.log(covid_data.filter(a=>a[2]>27000));

