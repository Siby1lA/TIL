/* Array

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

*/

/*Object

const monkey = {
    name: "ringo",
    face: "funy",
    age: 11,
    food: ["banana", "apple", "strawberry"],
    tail : true,
    location: {
        country: "congo",
        place: "forest",
        isAfrica: true,
    }
}

console.log(monkey);
console.log(monkey.food);
console.log(monkey.food[0]);
console.log(monkey.location.place);

monkey.name = "star";

console.log(monkey.name);

monkey.weight = 50;

console.log(monkey);
*/

//JSON
const monkey = {
    name: "ringo",
    face: "funy",
    age: 11,
    food: ["banana", "apple", "strawberry"],
    tail : true,
    location: {
        country: "congo",
        place: "forest",
        isAfrica: true,
    }
}

const monkeyJSON = JSON.stringify(monkey);

console.log(monkeyJSON);

const monkeyJSONParse = JSON.parse(monkeyJSON);

console.log(monkeyJSONParse);

