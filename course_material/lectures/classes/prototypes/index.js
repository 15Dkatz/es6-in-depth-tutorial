// // part 1:
// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
// }
//
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// console.log(harry);

// // part 2:
// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//   this.greet = () => `I'm ${this.name} from ${this.house}`;
// }
//
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// console.log(harry.greet());

// // part 3:
// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//   this.greet = () => `I'm ${this.name} from ${this.house}`;
// }
//
// Wizard.prototype.pet_name;
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = "Hedwig";
// console.log(harry);

// parts 4-5:
// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//   this.greet = () => `I'm ${this.name} from ${this.house}`;
// }

// // part 4:
// Wizard.prototype.pet_name;
// Wizard.prototype.info;
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = "Hedwig";
// harry.info = () => {
//   return `I have a ${this.pet} named ${this.pet_name}.`;
// }
// console.log(harry.info());

// // part 4:
// Wizard.prototype.pet_name;
// Wizard.prototype.info;
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = "Hedwig";
// harry.info = function() {
//   return `I have a ${this.pet} named ${this.pet_name}.`;
// }
// console.log(harry.info());
