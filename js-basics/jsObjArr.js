let obj = { name: "Rahul", age: 23, city: "Noida" };
let arr = ["name","city"];
let j=0; // traverses arr
let newObj = {};
for(key in obj){
    if(j == arr.length){
        break;
    }
    else if(arr[j] == key){
        newObj = {...newObj,[key] : obj[key]};
        j++;
    }
}

console.log(newObj);