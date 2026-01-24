let obj = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
];

let ans = {};
for(iter of obj){
    if(ans.hasOwnProperty(iter.city)){
        ans[iter.city].push(iter.name);
    }
    else{
        ans[iter.city] = [...iter.name];
    }
};

console.log(ans);


