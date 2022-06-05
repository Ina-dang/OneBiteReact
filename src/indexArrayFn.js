const arr = [1, 2, 3, 4];
const newArr = [];

//배열 내장함수 forEach
arr.forEach(function (elm) {
  console.log(elm);
});
arr.forEach((elm) => console.log(elm)); //화살표함수

//newArr에 arr상수 * 2를 넣음
arr.forEach(function (elm) {
  newArr.push(elm * 2);
});
console.log(newArr);

//배열내장함수 Map사용해서 더 간단하게
const newArr2 = arr.map((elm) => {
  return elm * 2; //return 사용가능
  /* 
    1 * 2 
    2 * 2
    3 * 2
    4 * 2 각각의 결과 출력
  */
});
//원본배열 모두 순회하면서 각 함수에대해 콜백
console.log(newArr2);

//배열에 어떤값이 있으면 TRUE 없으면 FALSE반환
let number = 3;
arr.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  }
});
// 위 함수를 간단하게 할 수 있는 내장함수 includes
console.log(arr.includes(number)); // "3"문자열이면 false

//인덱스 내장함수
//일치하는게 없으면 -1, 있으면 몇번 위치에 있는지 0,1,2 위치를 반환
console.log(arr.indexOf(number));

//객체배열에서 원하는 속성을 가진 인덱스 찾기
//green 찾기
const arr1 = [
  { color: "red" },
  { color: "brown" },
  { color: "green" },
  { color: "black" },
  { color: "black" }
];

console.log(
  arr1.findIndex((elm) => {
    return elm.color === "black";
  }) //일치하는 요소가 두 개일경우 먼저 조건을 만족하는 인덱스 반환
);

//찾고자 하는 요소에 직접적으로 접근
const idx = arr1.findIndex((elm) => {
  return elm.color === "black";
});
console.log(arr1[idx]);

const element = arr1.find((elm) => {
  return elm.color === "green";
});
console.log(element);

const arr2 = [
  { num: 1, color: "red" },
  { num: 2, color: "brown" },
  { num: 3, color: "green" },
  { num: 4, color: "black" },
  { num: 5, color: "black" }
];
//요소 필터링 내장함수 filter
console.log(arr2.filter((elm) => elm.color === "black"));

//배열 내장함수 인덱스를 기준으로 slice
console.log(arr2.slice(0, 3)); //이상 미만의 결과 반환

//결합
console.log(arr2.concat(arr));

let chars = ["라", "나", "가", "다"];

//원본 배열을 정렬
chars.sort();
console.log(chars);

let numbers = [0, 1, 3, 2, 10, 30, 20];

numbers.sort();
console.log(numbers); //[0, 1, 10, 2, 20, 3, 30]

//비교함수 필요
let numbers1 = [0, 1, 3, 2, 10, 30, 20];
const compare = (a, b) => {
  if (a > b) {
    //크다
    return 1;
  }
  if (a < b) {
    //작다
    return -1;
  }
  if (a < b) {
    //같다
    return 0;
  }
};
numbers1.sort(compare);
console.log(numbers1);

//배열 모든 요소를 문자열 형태로 합하기 using join
const arr3 = ["이정한", "님", "안녕하세요", "또오셨군요"];
console.log(arr3);
console.log(arr3.join()); //,가 나옴
console.log(arr3.join(" ")); //구분자 공백으로 바뀜
console.log(arr3.join("===")); //구분자 공백으로 바뀜
console.log(arr3.join("예에")); //구분자 공백으로 바뀜
