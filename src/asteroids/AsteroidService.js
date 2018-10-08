'use strict';

import Asteroid from './AsteroidModel.js';
import AsteroidCoordsService from './AsteroidCoordsService';

class AsteroidService {
  constructor(quantity) {
    this.asteroids = [];
    let asteroidCoordsService = new AsteroidCoordsService([4, 4]);
    for (let i = 0; i < quantity; i++) {
      this.asteroids.push(new Asteroid('asteroid_' + i, asteroidCoordsService.getCoords()));
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
