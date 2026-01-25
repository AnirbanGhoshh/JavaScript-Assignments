/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = ['a','e','i','o','u'];
    let countVowels=0;
    let strArr = str.toLowerCase().split('');
    for(let it of strArr){
      if(vowels.includes(it)){
        countVowels++;
      }
    }
    return countVowels;
}

module.exports = countVowels;