let obj1 = { a: 10, b: 20 };
let obj2 = { a: 5, c: 15 };

let keys = new Set([
  ...Object.keys(obj1),
  ...Object.keys(obj2)
]);

let ans = [...keys].reduce((acc, key) => {
  if (key in obj2) {
    acc[key] = obj2[key];
  } else {
    acc[key] = obj1[key];
  }
  return acc;
}, {});

console.log(ans);
