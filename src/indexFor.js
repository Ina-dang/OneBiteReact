for (let i = 0; i <= 100; i++) {
  console.log("winterlood");
}
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let person = {
  name: "이정한",
  age: 25,
  tall: 175
};

const personKeys = Object.keys(person);

for (let i = 0; i < personKeys.length; i++) {
  //console.log(personKeys[i]);
  const curKey = personKeys[i];
  const curValue = person[curKey];
  console.log(`${curKey} : ${curValue}`);
}

const personValues = Object.values(person);
for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}
