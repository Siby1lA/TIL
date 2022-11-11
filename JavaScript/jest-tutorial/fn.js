// const fn = {
//   add: (num1, num2) => num1 + num2,
//   makeUser: (name, age) => ({ name, age, gender: undefined }),
//   throwErr: () => {
//     throw new Error("xx");
//   },
// };

const fn = {
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
};

module.exports = fn;
