// program to check if the string is palindrome or not

function Palindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
 
let str1 = "racecar";
console.log(Palindrome("racecar"));