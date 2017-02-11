function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

Vehicle.prototype.color;
Vehicle.prototype.bio = function() {
  return `A ${this.color} ${this.make} made in ${this.year}.`;
};

let s = new Vehicle("Tesla", 2017);
s.color = "black";
