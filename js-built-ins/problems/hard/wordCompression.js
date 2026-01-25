/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/


function compressWords(newArr) {
  // Your code here
  if (newArr.length === 0) return [];
  let c=1;
  let arr = [];
  for(let i=1 ; i < newArr.length ; i++){
    if(newArr[i] == newArr[i-1]){
      c++;
    }
    else{
      if(c != 1){
        arr.push(`${newArr[i-1]}${c}`);
      }
      else{
        arr.push(`${newArr[i-1]}`);
      }
      c=1;
    }
  }
  if(c!=1) arr.push(`${newArr[newArr.length-1]}${c}`);
  else arr.push(`${newArr[newArr.length-1]}`);
  return arr;
}


module.exports = compressWords;
