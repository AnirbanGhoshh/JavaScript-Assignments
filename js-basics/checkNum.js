let obj = { a: 1, b: "hello", c: 3 } ;
let sol = true;
let cnt=0;
let ans = Object.values(obj).forEach((it)=>{
    cnt++;
    if(typeof(it) !== 'number'){
        sol = false;
    }
});

console.log(sol);
console.log(cnt);

