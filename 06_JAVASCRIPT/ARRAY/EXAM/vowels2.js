str="hai Akhil Chand ps hello"

vowels=['a','e','i','o','u','A','E','I','O','U']


console.log(Array.from(str));

Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))