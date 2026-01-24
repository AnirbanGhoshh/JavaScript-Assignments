let entry = ["apple", "banana", "apple", "orange", "banana", "apple"];
let freq = new Map();

for(let iter of entry){
    freq.set(iter,(freq.get(iter) || 0) + 1);
}

console.log(freq);