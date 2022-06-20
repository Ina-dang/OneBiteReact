let a = 3;
//조건식       참일경우              거짓일경우
a >= 0 ? console.log("양수") : console.log("음수");

let b = []; //빈배열
if (b.length === 0) {
  console.log("빈 배열");
} else {
  console.log("안 빈 배열");
}
//삼항연산자
// b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
const arrayStatus = b.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

const result = b ? true : false;
console.log(result);

//TODO : 학점계산프로그램
//90점이상 A+
//50점이상 B+
//둘다아니면 F
let score = 100;
score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}

let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` }));
console.log(greeting(null));
