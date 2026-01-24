let obj = { x: [1,2,3], y: [2,3,4], z: [4,5] };
let st = new Set();
for(key in obj){
    for(iter of obj[key]){
        st.add(iter);
    }
}
console.log(st);
let arr = [];
for(iter of st){
    arr.push(iter);
}
console.log(arr);