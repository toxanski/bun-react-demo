import './index.css';
import { generateMatrix, getCellColor, getCellOpacity } from './utils.ts';

const matrix = generateMatrix();

// sky: rgb(65, 188, 156) - value > 0;
// dark: rgb(21, 24, 32) - value ~ 0;
// red: rgb(191, 11, 27) - value < 0;

// При фильтрации скрывать ячейки с помощью overflow: hidden

export default function App() {
  return (
    <div className="matrix">
      {matrix.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, i) => (
            <div key={i} className={`cell ${getCellColor(cell)}`}>
              <span
                className="cell-cloak"
                style={{ filter: `opacity(${getCellOpacity(cell)}%)` }}
              />
              <span className="cell-text">{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
