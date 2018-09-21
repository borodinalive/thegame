'use strict';

import '../public/css/style.css';

import Asteroid from './models/Asteroid';

function addAsteroid(asteroidModel) {
  let asteroid = document.createElement('div');
  asteroid.className = 'asteroid';

  asteroid.style.top = asteroidModel.coords.y + 'vh';
  asteroid.style.left = asteroidModel.coords.x + 'vw';

  let size = asteroidModel.size + 'px';
  asteroid.style.height = size;
  asteroid.style.width = size;
  asteroid.style.backgroundSize = size;

  document.body.appendChild(asteroid);
}

document.addEventListener('DOMContentLoaded', addChildren);

function addChildren() {
  for (let i = 0; i < 5; i++) {
    let asteroid = new Asteroid('asteroid_' + i);
    addAsteroid(asteroid);
    console.log(asteroid);
  }
}
