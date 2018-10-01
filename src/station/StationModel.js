'use strict';

import Shuttle from '../shuttle/ShuttleModel';
import stationCreate from '../dom/createStation';

class Station {
  constructor(shuttleNum, asteroidService) {
    this.shuttles = [];
    this.asteroidService = asteroidService;
    for (let i = 0; i < shuttleNum; i++) {
      this.shuttles.push(new Shuttle('shuttle_' + (i + 1)));
    }

    this.create();
  }

  create() {
    console.log('create');
    stationCreate();

    this.shuttles.forEach((shuttle) => {
      shuttle.createInDom();
    });
  }
}

export default Station;
