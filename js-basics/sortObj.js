let arrObj = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
];

arrObj.sort((x,y)=>{
    if(x.name === y.name) return x.age - y.age;
    else return x.name.localeCompare(y.name);
});
console.log(arrObj);