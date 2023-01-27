import React, { useState } from 'react';
import './App.css';
import { TicTacToeGrid } from './TicTacToeGrid'
import type { Grid9Values , CellClickHandler, CellIndex, WinnerCellIndices} from "./TicTacToeGridType"

const values : Grid9Values = [null, null, null, null, null, null, null, null, null];
const winnerCellIndices : WinnerCellIndices = null;

const onCellClick : CellClickHandler = (cellIndex: CellIndex) => {}

const [score, setScore] = useState(values);
const [winnerIndex, setWinnerIndex] = useState(winnerCellIndices);


function App() {
  return (
    <div>
      <TicTacToeGrid cellClickHandler={onCellClick} score={score} winnerIndex={winnerIndex} />
    </div>

  );
}

export default App;
