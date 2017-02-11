##Coding Exercise: Prototype a Vehicle

Let's practice prototypes in JavaScript by working with prototypes. In this example, we already have a Vehicle Prototype that allows us to create Vehicles with a "make" and "year". However, we want to add more functionality to this prototype. Note that there's already an instance of this Vehicle prototype:

let s = new Vehicle("Tesla", 2017);
s.color = "black";

**Directions:**
Make two changes:

a) Add a 'color' field to the prototype by either using the 'prototype' keyword or adding another parameter to the function constructor.

b) Add a 'bio' method to the prototype by either using the 'prototype' keyword or adding another parameter to the function constructor. Note a method added with the 'prototype' keyword will have to use a normal function declaration since arrow functions ignore the 'this' object.

For our variable, 's', the bio method should **return**:
"A black Tesla made in 2017."


###[Student File](./student.js)

###[Solution File]('./solution.js')

###[Evaluation File]('./evaluate.js')
