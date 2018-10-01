'use strict';

function createStation() {
  let station = document.createElement('div');
  station.classList.add('station');
  document.body.appendChild(station);
}

export default createStation;
