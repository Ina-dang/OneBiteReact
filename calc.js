//계산 기능을 하는 파일(계산모듈)

const add = (a, b) => a + b ;
const sub = (a, b) => a - b ;

// 객체단위로 내보낼 수 있다
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub
}