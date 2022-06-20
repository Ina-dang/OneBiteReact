const cookie = {
  base: "cookie",
  madeIn: "korea"
};
const chocochipCookie = {
  ...cookie,
  toping: "chocochip"
};
const blueberryCookie = {
  ...cookie,
  toping: "blueberry"
};
const strawberryCookie = {
  ...cookie,
  toping: "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCoockies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, "함정쿠키", ...topingCoockies];
console.log(allCookies);
