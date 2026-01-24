let obj = { a: 20, b: 60, c: 40, d: 90 };
let ans = {};
for(let key in obj){
    if(obj[key] > 50){
        ans = {...ans,[key] : obj[key]};
    }
}

console.log(ans);