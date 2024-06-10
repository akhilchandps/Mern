const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

  
  // Question 1: Print the names of all programming languages in the array.
  // Question 2: Print the total number of programming languages in the array.
  // Question 3: Print the languages that are popular.
  // Question 4: Print the names of the languages created after the year 2000.
  // Question 5: Print the languages that are both functional and object-oriented.
  
    // Question 1: Print the names of all programming languages in the array.
 
    programmingLanguages.forEach(na=>console.log(na.name));

// Question 2: Print the total number of programming languages in the array.
   console.log("\n2.Print the total number of programming languages in the array");

   total=programmingLanguages.length
   console.log(total);

// Question 3: Print the languages that are popular.
     console.log("\n 3: Print the languages that are popular.");
     console.log(programmingLanguages.filter(data=> data.popular==true));


// Question 4: Print the names of the languages created after the year 2000
      console.log(" \n4: Print the names of the languages created after the year 2000.");

      console.log(programmingLanguages.filter(data=> data.yearCreated>2000).name);


// Question 5: Print the languages that are both functional and object-oriented.

   console.log(" \n 5 Print the languages that are both functional and object-oriented.");

  console.log(programmingLanguages.filter(lag=>lag.paradigms.includes('Functional') && lag.paradigms.includes('Object-oriented')));
      


  
  
  
  
  
  
  
  
  