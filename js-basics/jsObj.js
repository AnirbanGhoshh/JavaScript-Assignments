let newThing = { a: 3, b: 1, c: 2 };
console.log(Object.keys(newThing).length);
let newArr = Object.entries(newThing).map(([x,y])=>{
    return [x,y] = [y,x]; 
});

newArr.sort((x,y)=>{
    return x[0] - y[0];
});

let newerArr = newArr.map(([x,y])=>{
    return [x,y] = [y,x];
});

console.log(newerArr);