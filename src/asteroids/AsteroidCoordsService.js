'use strict';

export default class AsteroidCoordService {
  constructor(dementsions) {
    this.layout = {
      fractions: { x, y },
      grid: [],
    };
    let x = dementsions && dementsions[0] || 3;
    let y = dementsions && dementsions[1] || 3;

    this.layout.fractions.x = 100 / x;
    this.layout.fractions.y = 100 / y;

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let coordsX = i * this.layout.fractions.x;
        let coordsY = j * this.layout.fractions.y;

        if (!((i == 0 && j == y - 1) || (i == x - 1 && j == 0))) {
          this.layout.grid.push({
            x: coordsX,
            y: coordsY,
          });
        }
      }
    }
  }

  getCoords() {
    let length = this.layout.grid.length;
    let randomIndex = Math.round(Math.random() * (length - 1));
    let gridItem = this.layout.grid.splice(randomIndex, 1)[0];
    return {
      x: gridItem.x + Math.round(Math.random() * this.layout.fractions.x / 2),
      y: gridItem.y + Math.round(Math.random() * this.layout.fractions.y / 2),
    };
  }
}
