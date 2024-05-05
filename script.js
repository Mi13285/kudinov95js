// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, 3000));
// }
// delay(3000).then(() => console.log("выполнилось через 3 секунды"));

// async function loadJson(url) {
//   // (1)
//   let response = await fetch(url); // (2)

//   if (response.status == 200) {
//     let json = await response.json(); // (3)
//     return json;
//   }

//   throw new Error(response.status);
// }

// loadJson("no-such-user.json").catch(alert);

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // покажет 10 через 1 секунду
//   wait().then((result) => alert(result));
// }

// f();

let number = function (array) {
  return array === []
    ? array
    : array.map((item, index) => `${index + 1}: ${item}`);

  return array.map((item, index) => `${index + 1}: ${item}`);
};
console.log(number([]));
console.log(number(["a", "b", "c"]));

// let number = function (array) {
//   if (array === []) {
//     return array;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       array[i] = `${i + 1}: ${array[i]}`;
//     }
//     return array;
//   }
// };
// console.log(number([]));
// console.log(number(["a", "b", "c"]));
