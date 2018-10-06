'use strict';

function createAsteroid(asteroidModel) {
  let asteroid = document.createElement('div');
  asteroid.className = 'asteroid';
  asteroid.setAttribute('id', asteroidModel.name);

  asteroid.style.top = asteroidModel.coords.y + 'vh';
  asteroid.style.left = asteroidModel.coords.x + 'vw';

  let size = asteroidModel.size + 'px';
  asteroid.style.height = size;
  asteroid.style.width = size;
  asteroid.style.backgroundSize = size;

  asteroid.style.animationDirection = Math.round(Math.random() * 10) % 2 == 0 ? 'reverse' : 'normal';

  document.body.appendChild(asteroid);
}

export default createAsteroid;
