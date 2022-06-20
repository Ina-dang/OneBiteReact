function isKoreanfood(food) {
  // if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
  if (["불고기", "비빔밥", "떡볶이"].includes(food)) {
    return true;
  }
  return false;
}

const food1 = isKoreanfood("불고기");
const food2 = isKoreanfood("파스타");
console.log(food1);
console.log(food2);

const getMeal = (mealType) => {
  if (mealType === "한식") {
    return "불고기";
  }
  if (mealType === "양식") {
    return "파스타";
  }
  if (mealType === "중식") {
    return "멘보샤";
  }
  if (mealType === "일식") {
    return "초밥";
  }
  return "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal("일식"));
console.log(getMeal());

// getMeal을 수정
const meal = {
  한식: "불고기",
  양식: "파스타",
  중식: "멘보샤",
  인도식: "카레"
};
const getMeals = (mealTypes) => {
  return meal[mealTypes] || "굶기";
};
console.log(getMeals("중식"));
console.log(getMeals(""));
