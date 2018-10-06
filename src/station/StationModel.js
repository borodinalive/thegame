'use strict';

import pubsub from 'pubsub-js';

import Shuttle from '../shuttle/ShuttleModel';
import stationCreate from '../dom/createStation';

class Station {
  constructor(shuttleNum, asteroidService) {
    this.name = 'station';
    this.coords = {
      x: -20,
      y: 85,
    };
    this.shuttles = [];
    this.asteroidService = asteroidService;
    for (let i = 0; i < shuttleNum; i++) {
      this.shuttles.push(new Shuttle('shuttle_' + (i + 1)));
    }

    this.create();
  }

  create() {
    let station = this;

    stationCreate(this);

    this.shuttles.forEach((shuttle) => {
      shuttle.createInDom();
    });

    let arr = [station].concat(this.asteroidService.asteroids);

    pubsub.subscribe('ready-to-go', () => {
      station.takeATrip(this.shuttles[0], arr.pop());
    });

    pubsub.publish('ready-to-go');
  }

  takeATrip(shuttle, target) {
    let shuttleElement = document.getElementById(shuttle.name);
    let shuttleInitCoords = getElementCoords(shuttleElement);

    let targetElement = document.getElementById(target.name);
    let targetCoords = getElementCoords(targetElement);

    shuttleElement.style.top = shuttleInitCoords.y + 'px';
    shuttleElement.style.left = shuttleInitCoords.x + 'px';

    setTimeout(() => {
      shuttleElement.style.top = targetCoords.y + 'px';
      shuttleElement.style.left = targetCoords.x + 'px';
    }, 100);

    setTimeout(() => {
      pubsub.publish('ready-to-go');
    }, 4000);
  }
}

export default Station;

function getElementCoords(element) {
  let clientRect = element.getBoundingClientRect();
  return {
    x: clientRect.left,
    y: clientRect.top,
  };
}
