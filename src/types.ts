export interface GenerateMatrixParams {
  rows: number;
  cols: number;
  min: number;
  max: number;
}

export type FilterType = 'all' | 'less' | 'more';
