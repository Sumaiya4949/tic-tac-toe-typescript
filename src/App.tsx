import React, { useCallback, useState } from 'react';
import './App.css';
import { ScoreBoard } from './ScoreBoard';
import { TicTacToeGrid } from './TicTacToeGrid';
import type { CellClickHandler, CellIndex, Grid9Values, WinnerCellIndices, PlayableValue } from "./type"

function App() {
  const values : Grid9Values = [null, null, null, null, null, null, null, null, null];
  const WinnerCellIndices: WinnerCellIndices = null;

  const [currentPlayer, setCurrentPlayer] = useState<PlayableValue>("X");
  const [scoreValues, setScoreValues] = useState<Grid9Values>(values);

  const onCellClick: CellClickHandler = useCallback((cellIndex: CellIndex) => {

    setScoreValues((prevScores: Grid9Values) => {
      return prevScores.map((item, index) => {
        if (index === cellIndex)
          return currentPlayer === "X" ? "X" : "0";
        else
          return item;
      }) as Grid9Values;
    });

    setCurrentPlayer((prevPlayer) => prevPlayer === "X" ? "0" : "X")
  }, [currentPlayer])
  

  return ( 
    <div>
      <ScoreBoard currentPlayer={currentPlayer} gameStatus='Running' winner='X'></ScoreBoard>
      <TicTacToeGrid grid9Values={scoreValues} handleCellClick={onCellClick} winnerIndex={WinnerCellIndices}/>
      <button className='resetButton'>Reset</button>
    </div>

  );
}

export default App;
