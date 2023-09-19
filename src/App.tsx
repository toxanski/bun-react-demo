import { generateMatrix, getCellColor, getCloakOpacity } from './utils.ts';
import { useState } from 'react';
import './index.css';
import type { FilterType } from './types.ts';

const ROWS = 13;
const COLUMNS = 13;
const MIN = -100;
const MAX = 100;

const matrix = generateMatrix({
  rows: ROWS,
  cols: COLUMNS,
  max: MAX,
  min: MIN,
});

export default function App() {
  const [filter, setFilter] = useState<FilterType>('all');

  function isCellVisible(value: number) {
    if (filter === 'all') {
      return true;
    }

    if (!value) {
      return false;
    }

    const cellVariant: Exclude<FilterType, 'all'> = value > 0 ? 'more' : 'less';

    return filter === cellVariant;
  }

  return (
    <main>
      <div className="table">
        {matrix.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, i) => (
              <div
                key={i}
                className={`cell bg-${getCellColor(cell)}`}
                style={{
                  visibility: isCellVisible(cell) ? 'visible' : 'hidden',
                }}
              >
                <span
                  className="cell__cloak"
                  style={{ filter: `opacity(${getCloakOpacity(cell, MAX)}%)` }}
                />
                <span className="cell__text">{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="filters">
        <button
          className="filter-btn bg-green"
          disabled={filter === 'more'}
          onClick={() => {
            setFilter('more');
          }}
        >
          Filter {'>'} 0
        </button>
        <button
          className="filter-btn bg-dark"
          disabled={filter === 'all'}
          onClick={() => {
            setFilter('all');
          }}
        >
          All
        </button>
        <button
          className="filter-btn bg-red"
          disabled={filter === 'less'}
          onClick={() => {
            setFilter('less');
          }}
        >
          Filter {'<'} 0
        </button>
      </div>
    </main>
  );
}
