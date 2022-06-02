// 객체생성방식 1 (생성자방식)
let person = new Object();

// 객체생성방식 2 (객체리터럴방식)
let person1 = {
  key: 123, //키 밸류 쌍으로 저장 => (객체)프로퍼티
  key1: "value2", //객체가 가지고 있는 데이터
  key2: true,
  key3: undefined,
  key4: function () {},
  key5: [1, 2]
}; //value엔 모든 자료형을 다 사용가능

console.log(person1);
console.log(person1.key1);
console.log(person1.key2);

let person2 = {
  name: "이정한",
  age: 25,
  area: "서울",
  say: function () {
    console.log(`내이름은 ${this.name}`);
    // console.log(`내이름은 ${this["name"]}`);
  }
};

//프로퍼티 호출방법 2가지
console.log(person2.name);
//[]괄호표기법 사용시는 반드시 프로퍼티를 문자열형태로 넣어야함
console.log(person2["age"]);
const name = "name";
console.log(person2[name]); //변수로인식

/* 함수로 프로퍼티키를통해 value를 받아올 때 괄호표기법 이용 */
function getPropertyValue(key) {
  return person2[key];
}
console.log(getPropertyValue("area"));

//프로퍼티추가법
person2.location = "한국";
person2["getder"] = "남성";
console.log(person2); //프로퍼티 수정

person2.name = "이정환 A";
person2["age"] = 22;
console.log(person2); //프로퍼티 수정

delete person2.age; //메모리는 계속 사용함
delete person2["location"];
console.log(person2); //프로퍼티 삭제

person2.area = null; //삭제와 같은 효과 & 메모리 중단
console.log(person2); //프로퍼티 삭제

//함수프로퍼티호출
person2.say();
person2["say"]();

person2.gender = "남성";
console.log(person2.getder);

//name이라는 프로퍼티가 있냐
console.log(`job: ${"job" in person2}`);
console.log(`gender: ${"gender" in person2}`);
