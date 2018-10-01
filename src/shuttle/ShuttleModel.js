'use strict';

import createShuttle from '../dom/createShuttle';


let CAPACITY = 100;
let MAX_SPEED = 20;

class Shuttle {
  constructor(name) {
    this.name = name;
    this.capacity = CAPACITY;
    this.speed = MAX_SPEED;
    this.load = 0;
  }

  createInDom() {
    createShuttle(this);
  }

  collectResources(asteroidModel) {
    let interval = window.setInterval(() => {
      this.load++;
      asteroidModel.resources--;
      if (this.load == this.capacity || asteroidModel.resources === 0) {
        window.clearInterval(interval);
      }
    }, 1000);
  }
}

export default Shuttle;
