'use strict';

function createStation(stationModel) {
  let station = document.createElement('div');
  station.classList.add('station');
  station.setAttribute('id', 'station');
  document.body.appendChild(station);
  station.style.left = stationModel.coords.x + 'px';
  station.style.top = stationModel.coords.y + 'vh';
}

export default createStation;
