Quiz: Methods and Modules

Time for another optional quiz! This will simply reinforce the topics that we just went over: methods and modules.

1)

True or false?

Arrow functions are anonymous by default.

**a) true** //answer

Explanation: Correct! Anonymous functions are always anonymous because they do not use the 'function declaration'.

b) false

Explanation: Incorrect. Anonymous functions are always anonymous because they do not the 'function declaration'.

2) Which es6 helper method allows us to create arrays by calling a specific function on each element within an initial array?

**a) map** //answer

Explanation: Correct!

b) filter

Explanation: Nope, this helper method creates new arrays on individual values of an array based on a certain test

3) Which choice shows valid use of the 'default' keyword?

a) export by default multiply;

Explanation: Incorrect. The default keyword does not follow a 'by' keyword.

**b) export default multiply;** // answer

Explanation: Correct! Valid syntax and use of the default keyword.

c) export { default, multiply }
Explanation: Incorrect. This would export two methods named default and multiply. But it would not export multiply as the default method.

4) Which built-in helper method could I use to check if a number is a not greater than 2^53 in JavaScript?

**a) Number.isSafeInteger()** //answer

Explanation: Correct! JavaScript limits safe integers to values up to 2^53, which is checked by Number.isSafeInteger()

b) Number.isFinite()

Explanation: Incorrect, but close. Numbers beyond 2^53 can be finite, but are they safe?
