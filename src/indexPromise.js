function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      //성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      //실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

function isPositiveP(number) {
  //비동기 작업을 실질적으로 수행하는 실행자
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 3000);
  };

  //new 키워드를 사용해서 Promise객체 생성
  const asyncTask = new Promise(executor);
  return asyncTask;
}
//반환받은 프로미스객체를 이용하여
//아무데서나 resolve, reject 결과를 볼 수 있다
const res = isPositiveP([]);

res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });

function taskA(a, b, resolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}
function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

const bPromistResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
});

console.log("분리하기");
console.log("분리하기");
console.log("분리하기");
console.log("분리하기");

bPromistResult
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("B RESULT : ", c_res);
  });
