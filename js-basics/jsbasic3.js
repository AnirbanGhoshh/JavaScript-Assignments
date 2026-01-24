let obj = { a: "x", b: "y", c: "z" };
let newObj = Object.fromEntries(
    Object.entries(obj).map(([x,y])=>[y,x])
);

console.log(newObj);

