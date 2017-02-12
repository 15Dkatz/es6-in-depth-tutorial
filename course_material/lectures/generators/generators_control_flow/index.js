// // part 1:
// function* evens() {
//   let count = 0;
//   while(true) {
//     count += 2;
//     yield count;
//   }
// }

// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);

// // part 2:
// function* evens() {
//   let count = 0;
//   while(true) {
//     count += 2;
//     var reset = yield count;
//     if (reset) {
//       count = 0;
//     }
//   }
// }
//
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next(true).value);
// console.log(sequence.next().value);
