import type { GenerateMatrixParams } from './types.ts';

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateMatrix({ rows, cols, min, max }: GenerateMatrixParams) {
  const matrix: number[][] = [];

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
      matrix[i][j] = getRandomInt(min, max);
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

export function getCloakOpacity(value: number, max: number): number {
  if (value === 0) {
    return 0;
  }

  return max - Math.abs(value);
}
