function taskA() {
  console.log("A 작업 끝");
}
//A작업 호출
taskA();
console.log("코드 끝");

/* function taskAsync() {
  setTimeout(() => {
    console.log("A TASK END");
  }, 2000);
}
taskAsync();
console.log("Async() 코드 끝"); */

function taskAsyncParam(a, b, callback) {
  setTimeout(() => {
    const res = a + b;
    callback(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

/*
taskAsyncParam(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
  console.log("B TASK RESULT : ", res);
});

taskC(14, (res) => {
  console.log("C TASK RESULT : ", res);
});
*/
taskAsyncParam(4, 5, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res); //
    });
  });
});

console.log("taskAsyncParam() 코드 끝");
