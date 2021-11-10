// Don't give up
// 포기하지 마세요

// 함수 선언
function doSomething2() {
  console.log('hello');
}

// function doSomething(add) {
//   console.log(add);
//   add(2, 3);
// }
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

// function add(a: number, b: number) { // 다른 언어
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// doSomething2();

// const result = add(1, 2);
// console.log(result);

doSomething(add);
// doSomething(add()); // 많은 분들이 하는 실수 -> 함수를 바로 호출해버림

const addFun = add;
console.log(addFun);
addFun(1, 2);