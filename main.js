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

/* 반복문 map 어떤 배열을 다른 형태의 배열로 재생성
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
*/

/* filter 배열안에서 특정 조건을 가진 아이템들만 뽑아냄

const animals = [
    { name: 'lion', size: 'big', isAggressive: true, weigh: 200},
    { name: 'monkey', size: 'midium', isAggressive: true, weigh: 30},
    { name: 'cat', size: 'small', isAggressive: false, weigh: 10},
    { name: 'rat', size: 'small', isAggressive: false, weigh: 2},
];

const smallAnimals = animals.filter(function(item){
    return  item.size === 'small';
});

console.log(smallAnimals);
*/

/* reduce 배열 안에 값들의 합을 구함

const numbers = [1,10,11,23,444];
const total = numbers.reduce(function(acc, cur){
    console.log(acc, cur);
    return acc+cur;
});

console.log(total);


const animals = [
    { name: 'lion', size: 'big', isAggressive: true, weigh: 200},
    { name: 'monkey', size: 'midium', isAggressive: true, weigh: 30},
    { name: 'cat', size: 'small', isAggressive: false, weigh: 10},
    { name: 'rat', size: 'small', isAggressive: false, weigh: 2},
];

const totalWeight = animals.reduce(function(acc, cur){
    return acc+cur.weigh;
}, 0);

console.log(totalWeight);
*/


/* if문
const x = 10;
if(x == "10"){ //자료형이 달라도 트루
    console.log(`x is 10`);
}

if(x === "10"){ //===가 3개면 자료형까지 같아야 조건이 성립함
    console.log(`x is 10`);
}else{
    console.log(`x is not 10`);
}

// 3항 연산자
const animal = "lion";
const food = animal === 'lioon' ? "meat" : "apple"; 
console.log(food);


//switch case
const animal = 'lion';

switch(animal){
    case 'lion':
        console.log('anlimal is lion');
        break;
    case 'monkey':
        console.log(`animal is monkey`);
        break;
    default:
        console.log('animal is unknown');
        break;
} */

함수
function add(a, b){ //nan일 경우 초기값을 지정가능 a=1, b=1
    return a+b;
}

const sum = add(10, 20);

console.log(sum);

// arrowFunction
const add2 = (a, b) =>{ //파라메터가 하나일 경우 괄호 생략 가능 a => a+5;
    return a+b;
}  //중괄호 생략 가능

console.log(add2(10,20));