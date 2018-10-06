'use strict';

function createShuttle(shuttleModel) {
  let shuttle = document.createElement('div');
  shuttle.classList.add('shuttle');
  shuttle.setAttribute('id', shuttleModel.name);
  document.body.appendChild(shuttle);
}

export default createShuttle;
