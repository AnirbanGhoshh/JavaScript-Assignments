let arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
let ans = arr.reduce((acc,obj)=>{
   return Object.assign(acc,{[obj.id] : [obj]});
},{});

console.log(ans);