Optional Quiz: Examining Closures

Time for an optional quiz! Let's check our newfound knowledge of generators.



<!--
1)

What concept in JavaScript to the idea that programs keep track of variable locations to understand where to access them?

a) function factories

Explanation: Nope. Function factories return functions with closures to allow for dynamic function creation.

b) data encapsulation

Explanation: Incorrect. Data encapsulation pertain more to the restriction of data to certain scopes with private variables and methods.

**c) lexical scoping** // answer

Explanation: Correct!


2)

Which of the following options represents a valid function factory?

**a) const makeAdd = x => y => x * y;** //answer

Explanation: Correct! This function returns an inner function. It then  multiply's the outer function's parameter and inner functions's parameter.

b) const makeAdd = function(x) { return new function() { x * y }; }

Explanation: Incorrect. This will not return a valid function factory for the custom addition of two numbers.


3) Does JavaScript support private methods natively in the same way that languages like Java do?

a) Yes.

Explanation: Actually, no. But we can emulate the behavior of private methods with closures!

**b) No.** //answer

Explanation: Correct! Even though JavaScript does not support private methods natively in the way languages like Java do, we can still emulate this behavior using closures. -->
