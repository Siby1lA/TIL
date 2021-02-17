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

/*JSON
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
*/

/* 전통의 반복문
const animals = [
    { name: 'lion', size: 'big', isAggressive: true, weigh: 200},
    { name: 'monkey', size: 'midium', isAggressive: true, weigh: 30},
    { name: 'cat', size: 'small', isAggressive: false, weigh: 10},
    { name: 'rat', size: 'small', isAggressive: false, weigh: 2},
];

for(let i=0; i<4; i++){ // animals.length에 값이 4개 있으니 이것도 가능
    console.log(animals[i].name);
}

for(let animal of animals){
    console.log(animal);
}


let i=0;
while(i<10){
    console.log(i);
    i++;
}

*/

/* 반복문 forEach 그냥 단순한 반복문
const animals = [
    { name: 'lion', size: 'big', isAggressive: true, weigh: 200},
    { name: 'monkey', size: 'midium', isAggressive: true, weigh: 30},
    { name: 'cat', size: 'small', isAggressive: false, weigh: 10},
    { name: 'rat', size: 'small', isAggressive: false, weigh: 2},
];

animals.forEach(function(animal, index){ //2번째는 반복문의 인덱스
    console.log(index);
});
*/

// 반복문 map 어떤 배열을 다른 형태의 배열로 재생성
const animals = [
    { name: 'lion', size: 'big', isAggressive: true, weigh: 200},
    { name: 'monkey', size: 'midium', isAggressive: true, weigh: 30},
    { name: 'cat', size: 'small', isAggressive: false, weigh: 10},
    { name: 'rat', size: 'small', isAggressive: false, weigh: 2},
];

const animalsNames = animals.map(function(animal){
    return `Animal's name is ${animal.name} and size is ${animal.size}`;
});

console.log(animalsNames);