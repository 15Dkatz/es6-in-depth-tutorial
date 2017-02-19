// // parts 1-2:
// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
//
// let letterGen = letterMaker();
//
// // part 1:
// console.log(letterGen.next().value);
//
// // part 2:
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// // part 3:
// function* countMaker() {
//   let count = 0;
//   while (count < 3) {
//     yield count += 1;
//   }
// }
//
// let countGen = countMaker();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value); // undefined
//
