let obj = { name: "Alice", age: 25 };
// console.log(objArr.length);

let ans = Object.entries(obj).map(([x,y])=>{
    return `${x}=${y}`;
}).join('&');

console.log(ans);

