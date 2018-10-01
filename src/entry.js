'use strict';

import '../public/css/style.css';
import AsteroidService from './asteroids/AsteroidService.js';
import Station from './station/StationModel.js';

document.addEventListener('DOMContentLoaded', addChildren);

function addChildren() {
  let asteroidService = new AsteroidService(4);
  let station = new Station(1, asteroidService);
}
