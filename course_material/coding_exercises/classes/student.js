class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Guitar extends Instrument {
  describe() {
    return // TODO fill this line
  }
}

let fender = new Guitar("Fender", "strings");
