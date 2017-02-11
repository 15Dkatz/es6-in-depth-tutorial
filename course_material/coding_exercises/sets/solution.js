const contains = (word, letter) => {
  let letters = word.split("");
  let letter_set = new Set(letters);
  return letter_set.has(letter);
};

let true_check = contains("west", "e");
let false_check = contains("north", "e");
