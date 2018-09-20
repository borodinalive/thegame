class Asteroid {
  constructor(name) {
    this.name = name;
    this.size = 50 + Math.round(Math.random() * 101);

    // TODO: сделать так, чтобы астероиды не находились в одном месте
    this.coords = {
      x: 30 + Math.round(Math.random() * 50),
      y: 30 + Math.round(Math.random() * 50),
    };
    this.resources = Math.round(Math.floor(Math.random() * 20) * this.size / 10);
  }
}

export default Asteroid;
