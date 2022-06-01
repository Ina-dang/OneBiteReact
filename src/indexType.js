//자료형과 형변환

let numberA = 12;
let numberB = "2";

console.log(numberA * numberB);
console.log(numberA + numberB);
console.log(numberA / numberB);
console.log(numberA - numberB);

console.log(numberA + parseInt(numberB));

// 연산자
let a = 5;

a++;
console.log(a);

++a;
console.log(a);

// null병합연산자
let b;

b = b ?? 10;
console.log(b);
