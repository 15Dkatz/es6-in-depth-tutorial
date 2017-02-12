function* letterMaker() {
  yield 'x';
  yield 'y';
  yield 'z';
}

let letterGen = letterMaker();
