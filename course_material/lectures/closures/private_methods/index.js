// // part 1:
// const budget = () => {
//   let balance = 0;
//   const changeBal = (val) => {
//     return balance += val;
//   }
//
//   const deposit20 = () => changeBal(20);
//   return { deposit20: deposit20 };
// };
//
// let wallet = budget();
// console.log(wallet);
// wallet.deposit20();

// // part 2:
// const budget = () => {
//   let balance = 0;
//   const changeBal = (val) => {
//     return balance += val;
//   }
//
//   const deposit20 = () => changeBal(20);
//   const check = () => balance;
//   return {
//     deposit20: deposit20,
//     check: check
//   };
// };
//
// let wallet = budget();
// wallet.deposit20();
// console.log(wallet.check());

// // part 3:
// const budget = () => {
//   let balance = 0;
//   const changeBal = (val) => {
//     return balance += val;
//   }
//
//   const deposit20 = () => changeBal(20);
//   const withdraw20 = () => changeBal(-20);
//   const check = () => balance;
//   return {
//     deposit20,
//     withdraw20,
//     check
//   };
// };
//
// let wallet = budget();
// wallet.deposit20();
// wallet.deposit20();
// wallet.withdraw20();
// wallet.deposit20();
// console.log(wallet.check());
