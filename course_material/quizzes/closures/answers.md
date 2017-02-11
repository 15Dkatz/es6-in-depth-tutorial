Quiz: Examining Closures

Time for an optional quiz! Let's check our newfound knowledge of closures:

1)

What concept in JavaScript to the idea that programs keep track of variable locations to understand where to access them?

1) function factories

Explanation: Nope. Function factories return functions with closures to allow for dynamic function creation.

2) data encapsulation

Explanation: Incorrect. Data encapsulation pertain more to the restriction of data to certain scopes with private variables and methods.

3) **lexical scoping** // answer

Explanation: Correct!


2)

Which of the following options represents a valid function factory?

1) **const makeAdd = x => y => x * y;** //answer

Explanation: Correct this function returns an inner function that multiply's the outer function's parameter and inner funciton's parameter;

2) const makeAdd = function(x) { return new function() { x * y }; }

Explanation: Incorrect. This will not return a valid function factory for the custom addition of two numbers.


3) Does JavaScript support private methods natively in the same way that languages like Java do?

1) Yes.

Explanation: Actually, no. But we can emulate the behavior of private methods with closures!

2) No.

Explanation: Correct! Even though JavaScript does not support private methods natively in the way languages like Java do, we can still emulate this behavior using closures.



<!-- Quiz: Methods and Modules

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

Explanation: Incorrect, but close. Numbers beyond 2^53 can be finite, but are they safe? -->
