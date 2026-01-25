/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  // Your code here
  let newStr = str.toLowerCase();
  let n = newStr.length;
  let cnt=0;
  let vowels = ['a','e','i','o','u'];
  for(let i=0 ; i < n ; i++){
    let char = newStr.charAt(i);
    if(vowels.includes(char)){
      cnt++;
    }
  }
  return cnt;
}

module.exports = { countVowels };



