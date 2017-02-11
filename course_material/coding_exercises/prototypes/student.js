// TODO
// * add a 'color' field to the prototype
// * add a 'bio' method that *returns*:
//      A ${this.color} {$this.make} made in ${this.year}.

function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

let s = new Vehicle("Tesla", 2017);
s.color = "black";
