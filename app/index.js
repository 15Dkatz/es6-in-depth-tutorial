// // part 1:
// const arrayIterator = (array) => {
//   let index = 0;
//
//   return {
//     next: () => {
//       if (index < array.length) {
//         let next = array[index];
//         index += 1;
//         return next;
//       }
//     }
//   }
// }
//
// var it = arrayIterator([1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// // part 2:
// function* arrayIterator() {
//   yield arguments;
// }
//
// var it = arrayIterator(1, 2, 3);
// console.log(it.next().value);

// // part 3:
// function* arrayIterator() {
//   for (let arg of arguments) {
//     yield arg
//   }
// }
//
// var it = arrayIterator(1, 2, 3);
//
// // part 4:
// function* arrayIterator() {
//   yield* arguments;
// }
//
// var it = arrayIterator(1, 2, 3);
//
// // part 5:
// var array = [1, 2, 3];
// var it = arrayIterator(...array);
//
// // parts 2-5:
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
