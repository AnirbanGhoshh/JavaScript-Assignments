let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, c: 5, d: 6 };

let ans = Object.keys(obj1).filter(key => key in obj2);
console.log(ans);
