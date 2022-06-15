// function
function hello() {
  return "hello";
}
// console.log(hello());

//ms를 받아서 ms만큼 대기했다가 끝나기
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function
async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
