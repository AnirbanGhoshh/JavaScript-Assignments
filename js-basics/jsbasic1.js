let obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

for(let key in obj){
    obj[key] = obj[key].reduce((sum,it)=>{
        return sum+it;
    },0);
}

console.log(obj);