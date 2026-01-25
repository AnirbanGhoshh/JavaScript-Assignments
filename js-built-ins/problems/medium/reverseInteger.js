/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  // Your code here
  let isaNeg = false;
  if(num < 0){
    isaNeg = true;
  }
  let n = Math.abs(num);
  let temp=0;
  while(n > 0){
    let ld = n % 10;
    temp = (temp*10) + ld;
    n = Math.floor(n/10);
  }
  if(isaNeg === true){
    temp = -1*temp;
  }

  return temp;
}

module.exports = reverseInteger;
