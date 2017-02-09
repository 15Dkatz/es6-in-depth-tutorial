Quiz: New ES6 Syntax

All right, time to get your game face on! The following multiple choice or true/false questions will help reinforce your ES6 knowledge. Note that this exercise is totally optional :)

1)

True or false?

The 'var' keyword allows for block scoping.

**a) false** //answer

Explanation: Correct! The 'var' keyword actually does not allow block scoping. Re-using the same variable with 'var' twice in coding blocks will overwrite data.

b) true

Explanation: Incorrect. The 'var' keyword actually does not allow block scoping. Re-using the same variable with 'var' twice in coding blocks will overwrite data.


2) Which es6 keyword declares a variable that cannot be re-assigned or re-declared?

a) let

Explanation: Nope, variables declared with 'let' can be re-assigned.

b) var

Explanation: Nope, variables declared with 'var' can be re-assigned.

**c) const** // answer

Explanation: Yes! The 'const' keyword restricts data from re-assignment.

3) Which choice correctly uses the spread operator?

a) let c = [1, ...a..., b];

Explanation: Incorrect. This is invalid syntax. The spread operator is denoted by: ...

b) let c = ...[a, b];

Explanation: Incorrect. This will throw an error because the spread operator expects a variable, not an array.

**c) let c = [a, ...b];** //answer
Explanation: Correct! This is valid syntax for the spread operator.


4) Say I had, b = 'blastoff'. Which line uses a template literal to set a 'message' variable to '3...2...1... blastoff!'

a) let message = '3...2...1...' + ' ' + b + '!';

Explanation: Incorrect. Although this creates the correct string, this does not use template literals but string concatenation.

b) let message = `3...2...1... {b}!`

Explanation: Incorrect. The correct syntax for embedding expressions into a template literal includes a dollar sign: ${...}

c) **let message = `3...2...1... ${b}!`** //answer

Explanation: Correct! This properly sets message to the desired string with a template literal.
