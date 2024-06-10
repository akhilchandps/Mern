


// str="Iam akhil";
// console.log(str.includes("akhil"));
// console.log(str.startsWith("Iam"));
// console.log(str.endsWith("akhil"));


//Extract The amount od String

// "please give  Rs 10000"


//  4. try to change 4th character of a given string

//where you able to do it

// let str1="where you able to do it"
// newname=str1.replace(str1[3],"R")
// console.log(newname);

//anagrams two string

// function checkAnagram(firstString, secondString) {
//     let a = firstString.replace(/\s+/g, '');
//     let b = secondString.replace(/\s+/g, '');
    
//     a = a.toLowerCase().split('').sort().join('');
//     b = b.toLowerCase().split('').sort().join('');
    
//     return a === b ? true : false;
//   }
  
//   console.log(checkAnagram('Listen', 'Silent'));



//   function countVowel(str) { 

//     var count=0
//     const vowels= ['a','e','i','o','u']

//    for(let char of str)
//    {
//     if(vowels.includes(char))
//     {
//        count++
//     }
 
//    }
//    return  count
// }

// console.log(count);






// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   let myString = "hello  world";
//   console.log(capitalizeFirstLetter(myString));





// function compressString(str) {
//     let compressedString = '';
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         count++;
//       } else {
//         compressedString += str[i] + count;
//         count = 1;
//       }
//     }
//     return compressedString.length < str.length ? compressedString : str;
//   }
//   // Usage
//   const inputString = 'aabcccccaaa';
//   const compressedString = compressString(inputString);
//   console.log('Compressed String:', compressedString);


// function stringCompression (str) {
//     var output = '';
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//       count++;
//       if (str[i] != str[i+1]) {
//         output += str[i] + count;
//         count = 0;
//       }
//     }
//     console.log(output); 
//   }\

// function compressString(str) {
//     let compressedString = '';
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         count++;
//       } else {
//         compressedString += str[i] + count;
//         count = 1;
//       }
//     }
//     return compressedString.length < str.length ? compressedString : str;
//   }

//   const inputString = 'aabcccccaaa';
//   const compressedString = compressString(inputString);
//   console.log('Compressed String:', compressedString);




// const str = 'Please give Rs 10000';

// console.log(str.substring(1, 3));


// console.log(str.substring(2));



function vowel_Count(str) {
    
    return str.replace(/[^aeiou]/g, "").length;
  }
  

  console.log(vowel_Count("javascript"));
  console.log(vowel_Count("luminartechnolab")); 