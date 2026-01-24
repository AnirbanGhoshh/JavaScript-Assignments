let obj = { name: "alice", city: "delhi" };
for(key in obj){
    obj[key] = obj[key].toUpperCase();
}

console.log(obj);

