let obj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
let ans = [];
for(let key in obj){
    ans = [...ans,...obj[key]];

}
console.log(ans);

