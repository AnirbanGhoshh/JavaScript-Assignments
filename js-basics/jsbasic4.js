let obj = { a: 10, b: 50, c: 20 };
let ans = Object.keys(obj).reduce((maxkey,key)=>{
    if(obj[key] > obj[maxkey]){
        maxkey = key;
    }
    return maxkey;
});

console.log(ans);

