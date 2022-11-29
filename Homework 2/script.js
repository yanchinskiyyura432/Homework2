//task 1
// let x = 1;
// let y = 2;

// let res1 = (x + y) * (y + y);
// res1 = String(res1);
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = x;
// res2 = Boolean(res2);
// res2 = String(res2);
// res2 += y;
// console.log(res2); // Допишіть код, необхідно використовувати змінні x і y // "true2"
// console.log(typeof res2); // "string"

// let res3 = y-x;
// res3 = Boolean(res3);
// console.log(res3); // Допишіть код, необхідно використовувати змінні x і y // true
// console.log(typeof res3); // "boolean"

// let res4 = x+y;
// x = String(x);
// res4 = Math.pow(x);
// console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
// console.log(typeof res4); // "number"

//task 2
// let result = prompt();
// if (result % 2 == 0 && result >= 0) {
//   console.log(result + " is a positive and even number");
// }

//task 3
// let array = [12, "text", true, null];
// console.log(array.length);
// let arrItem = prompt();
// array.push(arrItem);
// console.log(array[4]);
// array.shift();
// alert(array[0] + " " + array[1] + " " + array[2] + " " + array[3]);

//task 4
// let cities = ["Rome", "Lviv", "Warsaw"];
// let result = cities[0] + "*" + cities[1] + "*" + cities[2];
// alert(result);

//task 5
// let isAdult = prompt("How old are you?");
// if (isAdult >= 18) {
//   alert("You are adult!");
// } else if (isAdult < 18 && isAdult > 0) {
//   alert("You are too young");
// } else {
//   alert("What?!");
// }

//task 6
// let a = prompt("Enter first side of a triangle");
// let b = prompt("Enter second side of a triangle");
// let c = prompt("Enter third side of a triangle");
// if ((a, b, c > 0)) {
//   const area = (a * b) / 2;
//   console.log("Triangle area is : " + area.toFixed(3));
//   if (a * a + b * b == c * c) {
//     console.log("This triangle is a right-angled");
//   } else {
//     console.log("This triangle is not right-angled");
//   }
// } else if (
//   (a, b, c == 0 || a, b, c < 0 || Number.isInteger(a, b, c) == false)
// ) {
//   alert("Incorrect data");
// }

//task 7
// const currentHourDecl = new Date();
// const currentHour = currentHourDecl.getHours();
// if (
//   (currentHour >= 23 && currentHour <= 24) ||
//   (currentHour >= 0 && currentHour <= 5)
// ) {
//   alert("Good night");
// } else if (currentHour >= 5 && currentHour <= 11) {
//   alert("Good morning");
// } else if (currentHour >= 11 && currentHour <= 17) {
//   alert("Good afternoon");
// } else if (currentHour >= 17 && currentHour <= 23) {
//   alert("Good evening");
// }

// switch (true) {
//   case (currentHour >= 23 && currentHour <= 24):
//     alert("Good night");
//     break;
//   case (currentHour >= 0 && currentHour <= 5):
//     alert("Good night");
//     break;

//   case currentHour >= 5 && currentHour <= 11:
//     alert("Good morning");
//     break;

//   case currentHour >= 11 && currentHour <= 17:
//     alert("Good afternoon");
//     break;

//   case currentHour >= 17 && currentHour <= 23:
//     alert("Good evening");
//     break;
// }
