/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    let arr=[];
    for(let i=0 ; i < str.length ; i++){
      let ch = str.charAt(i);
      ch = ch.toLowerCase();
      if(ch >= 'a' && ch <= 'z'){
        arr.push(ch);
      }
    }

    return arr === arr.reverse();
}

module.exports = isPalindrome;