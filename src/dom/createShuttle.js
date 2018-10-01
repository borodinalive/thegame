'use strict';

function createShuttle(shuttleModel) {
  let shuttle = document.createElement('div');
  shuttle.classList.add('shuttle');
  document.body.appendChild(shuttle);
}

export default createShuttle;
