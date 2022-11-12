const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("xx");
  },
  getName: (callback) => {
    const name = "mike";
    setTimeout(() => {
      callback(name);
      //   throw new Error("에러");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
        // rej("error");
      }, 3000);
    });
  },
  connetUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  disconnetUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connetCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnetCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다.");
    return { name };
  },
};

module.exports = fn;
