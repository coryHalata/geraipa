// geraipa.js

class Geraipa {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

module.exports = Geraipa;
