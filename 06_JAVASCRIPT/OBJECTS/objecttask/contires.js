const countries = [
    { name:'United States', population:331002651, continent: 'North America',capital: 'washington DC'},
    { name:'china', population:1439323776, continent: 'Asia',capital: 'Beijing'},
    { name:'Brazil', population:212559417, continent: 'south America',capital: 'Brasilia'} ,
    { name:'United kingdom', population:67886011, continent: 'Europe',capital: 'London'},
    { name:'South africa', population:59308690, continent: 'Africa',capital: 'pretoria, cape town, Bloemfontein '} 
]

//1 print the name of all countires

    countries.map(data => console.log(data.name));

//2. find the countries with large population

console.log(countries.reduce((n1,n2)=>n1.population >n2.population? n1:n2));

//3. find the total population of countires

console.log(countries.reduce((n1,n2)=>n1+n2.population,0));

//4. find the countries in a specific continent (eg Asia) 

countries.filter(data => data.continent == "Asia").forEach(p=>console.log(p));

//5. print the capital names of more than one  city
console.log("\n capital names of more than one  city");

console.log(countries.filter(data=> data.capital.split(",").length>1).map(data=>data.capital));


//6. sort countrie based on population

console.log(countries.sort((a,b)=>b.population-a.population));


//7.find the countries with smallest population

console.log(countries.reduce((n1,n2)=>n1.population < n2.population? n1:n2).name);


//8.find the countries with the longest name
console.log("\n find the longest name");
console.log(countries.reduce((n1,n2)=>n1.name.length > n2.name.length?n1:n2).name);

//9.find the countries with the shortest name
console.log("\n find the shortest name");
console.log(countries.reduce((n1,n2)=>n1.name.length< n2.name.length?n1:n2).name);

//10.find the countries with the shortest name 

console.log(countries.reduce((n1,n2)=> n1+n2.population,0)/ countries.length);




