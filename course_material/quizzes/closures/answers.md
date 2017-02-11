Quiz: Examining Closures

Time for an optional quiz! Let's check our newfound knowledge of closures:

1)

What concept in JavaScript to the idea that programs keep track of variable locations to understand where to access them?

1) function factories

Explanation: Nope. Function factories return functions with closures to allow for dynamic function creation.

2) data encapsulation

Explanation: Incorrect. Data encapsulation pertain more to the restriction of data to certain scopes with private variables and methods.

**3) lexical scoping** // answer

Explanation: Correct!


2)

Which of the following options represents a valid function factory?

**1) const makeAdd = x => y => x * y;** //answer

Explanation: Correct! This function returns an inner function. It then  multiply's the outer function's parameter and inner functions's parameter.

2) const makeAdd = function(x) { return new function() { x * y }; }

Explanation: Incorrect. This will not return a valid function factory for the custom addition of two numbers.


3) Does JavaScript support private methods natively in the same way that languages like Java do?

1) Yes.

Explanation: Actually, no. But we can emulate the behavior of private methods with closures!

**2) No.** //answer

Explanation: Correct! Even though JavaScript does not support private methods natively in the way languages like Java do, we can still emulate this behavior using closures.
