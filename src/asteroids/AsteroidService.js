'use strict';

import Asteroid from './AsteroidModel.js';

class AsteroidService {
  constructor(quantity) {
    this.asteroids = [];
    for (let i = 0; i < quantity; i++) {
      this.asteroids.push(new Asteroid('asteroid_' + i));
    }

    this.create();
  }

  create() {
    this.asteroids.forEach((asteroid) => {
      asteroid.createInDom();
    });
  }

  setAsteroidPosition() {
  }

  getAsteroidPosition() {
  }
}

export default AsteroidService;
