'use strict'

// async & await
// clear style of using promise :)

// 1. async
function fetchUser2() {
  // do network request in 10 secs....
  return new Promise((resolve, reject) => {
    // return 'ellie';
    resolve('ellie');
  })
}

const user2 = fetchUser2();
user2.then(console.log); // Promise 출력
console.log(user2); // ellie 출력


// promise를 이용하지 않고도, 조금 더 간편하게 비동기를 작성할 수 있는 방법
async function fetchUser() {
  // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log); // Promise 출력
console.log(user); // ellie 출력

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw 'error';
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

// function getBanana2() {
//   return delay(3000)
//     .then(() => 'banana');
// }

// function pickFruits2() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

// pickFruits2().then(console.log);

// async function pickFruits3() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// pickFruits3().then(console.log);

// async function pickFruits4() {
//   try {
//     const apple = await getApple();
//     const banana = await getBanana();
//   } catch () {
    
//   }
//   return `${apple} + ${banana}`;
// }

// pickFruits4().then(console.log);

async function pickFruits5() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits5().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);