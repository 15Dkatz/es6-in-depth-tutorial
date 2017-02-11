// // parts 1-2:
// let a = new Map();
// let key_1 = 'string key';
// a.set(key_1, 'return value for a string key');
//
// // part 1:
// console.log(a);
//
// // part 2:
// let key_2 = { a: 'key '};
// let key_3 = function() {};
// a.set(key_2, 'return value for an object');
// a.set(key_3, 'return value for a function');
// console.log(a);

// // part 3:
// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
// console.log(valMap);

// // part 4:
// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
// for (let [key, value] of valMap.entries()) {
//   console.log(`${key} => ${value}`);
// }

// // part 5:
// let string = "oewiuraowehpamennoawponeienuaperunaewopinu";
// let letters = new Map();
// for (let i=0; i<string.length; i++) {
//   let letter = string[i];
//   if (letters.has(letter == false)) {
//     letters.set(letter, 1);
//   } else {
//     letters.set(letter, letters.get(letter) + 1);
//   }
// }
// console.log(letters);
