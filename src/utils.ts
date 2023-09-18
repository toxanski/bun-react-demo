export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateMatrix(): number[][] {
  const ROWS = 13;
  const COLUMNS = 13;
  const MIN = -100;
  const MAX = 100;
  const matrix: number[][] = [];

  for (let i = 0; i < ROWS; i++) {
    matrix[i] = [];

    for (let j = 0; j < COLUMNS; j++) {
      matrix[i][j] = getRandomInt(MIN, MAX);
    }
  }

  return matrix;
}

export function getCellColor(value: number) {
  if (value > 0) {
    return 'green';
  }

  if (value < 0) {
    return 'red';
  }

  return 'dark';
}

// export function getCellBrightness(value: number): number {
//   if (value > 0) {
//     return 0 + value;
//   }
//
//   if (value < 0) {
//     return 0 + Math.abs(value);
//   }
//
//   return 100;
// }

export function getCellOpacity(value: number): number {
  if (value === 100) {
    return 50;
  }

  return 100 - Math.abs(value);
}
