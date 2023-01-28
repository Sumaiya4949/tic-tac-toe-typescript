import React from 'react';
import './App.css';
import { TicTacToeGrid } from './TicTacToeGrid';
import type { CellClickHandler, CellIndex, Grid9Values, WinnerCellIndices } from "./type"

function App() {
  const values : Grid9Values = [null, null, null, null, '0', null, null, null, 'X'];
  const WinnerCellIndices: WinnerCellIndices = null;

  const onCellClick: CellClickHandler = (cellIndex: CellIndex) => {
    console.log(`Hi ${cellIndex} is clicked`);
  }
  

  return (
    <div>
      <TicTacToeGrid grid9Values={values} cellClickHandler={onCellClick} winnerIndex={WinnerCellIndices}/>
    </div>

  );
}

export default App;
