'use strict';

import createAsteroid from '../dom/createAsteroid.js';

class Asteroid {
  constructor(name, coords) {
    this.name = name;
    this.size = 50 + Math.round(Math.random() * 101);
    this.coords = coords;
    this.resources = Math.round(Math.floor(Math.random() * 20) * this.size / 10);
  }

  createInDom() {
    createAsteroid(this);
  }
}

export default Asteroid;
