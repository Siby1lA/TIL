// const fn = require("./fn");

const fn = require("./fn");

// // toBe
// test("1은 1.", () => {
//   expect(1).toBe(1);
// });

// test("2더하기 3은 5", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3더하기 3은 5가 아님", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("2더하기 3은 5", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// // toEqual
// // toStrictEqual
// test("이름과 나이를 전달 받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("mike", 30)).toEqual({
//     name: "mike",
//     age: 30,
//   });
// });
// test("이름과 나이를 전달 받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("mike", 30)).toStrictEqual({
//     name: "mike",
//     age: 30,
//   });
// });

// // toBeNull
// // toBeUndefined
// // toBeDefined
// test("null은 null", () => {
//   expect(null).toBeNull();
// });

// // toBeTruthy
// // toBeFalsy
// test("0은 false", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("비어있지 않은 문자열은 true", () => {
//   expect(fn.add("hello", "world")).toBeTruthy();
// });

// // toBeGreaterThan 크다
// // toBeGraterThanOrEqual 크거나 같다
// // toBeLessThan 작다
// // toBeLessThanOrEqual 작거나 같다

// test("ID는 10자 이하", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// test("비밀번호 4자리", () => {
//   const pw = "1234";
//   expect(pw.length).toBe(4);
// });

// test("비밀번호 4자리", () => {
//   const pw = "1234";
//   expect(pw.length).toEqual(4);
// });

// // 값이 근사치면 트루 toBeCloseTo
// test("0.1 더하기 0.4", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// // 문자열에 특정 요소가 있는지 확인 toMatch
// test("Hello World에 e라는 글자가 있나", () => {
//   expect("Hello World").toMatch(/e/);
// });

// // 배열에 특정 요소가 있는지 확인 toContain
// test("유저 리스트에 mike가 있나", () => {
//   const user = "mike";
//   const userList = ["tom", "mike", "kai"];
//   expect(userList).toContain(user);
// });

// test("에러남", () => {
//   expect(() => fn.throwErr()).toThrow();
// });
// test("에러남", () => {
//   expect(() => fn.throwErr()).toThrow("xx");
// });

// 비동기 callback 방식
// done으로 기달리게함 (안쓰면 그냥 실행 끝내버림)
// test("3초 후에 받아온 이름은 mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("mike");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fn.getName(callback);
// });

// // 비동기 promise
// test("3초 후에 받아온 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
//   // resolves, rejects 테스트도 가능
//   // return expect(fn.getAge()).resolves.toBe(30);
//   // return expect(fn.getAge()).rejects.toMatch("error");
// });

// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });

// // resolves, rejects 테스트도 가능
// test("3초 후에 받아온 나이는 30", async () => {
//   await expect(fn.getAge()).resolves.toBe(30);
// });

// 테스트 전후 작업

let num = 0;

// 각 테스트 전에 실행됨
// beforeEach(() => {
//   num = 0;
// });

// 각 테스트 직후 실행
// afterEach(() => {
//   num = 0;
// });

// test("0더하기 1은 1", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0더하기 2은 2", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0더하기 3은 3", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });

// let user;
// // all은 각 테스트마다 실행이 아닌 전체적인 테스트 실행 전, 후에 실행
// beforeAll(async () => {
//   user = await fn.connetUserDb();
// });

// afterAll(async () => {
//   return fn.disconnetUserDb();
// });

// test("이름은 mkie", () => {
//   expect(user.name).toBe("mike");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// // 별개의 작업 공간 describe
// describe("Car 관련 작업", () => {
//   let car;
//   beforeAll(async () => {
//     car = await fn.connetCarDb();
//   });

//   afterAll(async () => {
//     return fn.disconnetCarDb();
//   });

//   test("이름은", () => {
//     expect(car.name).toBe("z4");
//   });

//   test("컬러는", () => {
//     expect(car.color).toBe("red");
//   });
// });

// 실행 순서 알아보기
// 밖에 있는 beforeEach는 안에 있는 beforeEach 보다 항상 먼저 실행
beforeAll(() => console.log("밖 beforeAll")); // 1
beforeEach(() => console.log("밖 beforeEach")); // 2 6
afterEach(() => console.log("밖 afterEach")); // 4 10
afterAll(() => console.log("밖 afterAll")); // 12

test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1); // 3
});

describe("Car 관련 작업", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 11

  test("0 + 1 = 1", () => {
    expect(fn.add(0, 1)).toBe(1); // 8
  });
});

//.only 는 그 테스트 코드만 실행
//.skip 은 그 테스트 코드를 스킵

test.skip("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1); // 8
});
test.only("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1); // 8
});
