let string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
  // TODO Create a map called 'letters'
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      // TODO set the letter in the map to 1
    } else {
      // TODO update the value of letter in letters to its value + 1
    }
  }
  return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');
