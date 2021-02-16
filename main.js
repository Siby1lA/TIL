// Array

const animals =["lion", "bear", "monkey"];

console.log(animals[0]);

animals[3] = "deer";

console.log(animals);

animals.push("tiger");

console.log(animals);

animals.unshift("hippo");

console.log(animals);

animals.pop();

console.log(animals);

console.log(Array.isArray(animals));

console.log(Array.isArray("hello"));

console.log(animals.indexOf("bear"));

//animals.splice(2, 1);

//console.log(animals);

const bearIndex = animals.indexOf("bear");
animals.splice(bearIndex, 1);
console.log(animals);