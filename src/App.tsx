import React, { useCallback, useMemo, useState } from 'react';
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

    if (winner === null) {
    setScoreValues((prevScores: Grid9Values) => {
      return prevScores.map((item, index) => {
        if (index === cellIndex)
          return currentPlayer === "X" ? "X" : "0";
        else
          return item;
      }) as Grid9Values;
    });

    setCurrentPlayer((prevPlayer) => prevPlayer === "X" ? "0" : "X")
  }
}, [currentPlayer])

  const winner = useMemo(() => {
    let i = 0;
    while (i < 7) {
      if ((scoreValues[i] === scoreValues[i+1]) && (scoreValues[i] === scoreValues[i+2]) && scoreValues[i] !== null) {
        return currentPlayer === "0" ? "X" : "0";
      }
      i = i + 3
    }

    let j = 0;
    while(j < 3) {
      if ((scoreValues[j] === scoreValues[j+3]) && (scoreValues[j] === scoreValues[j+6]) && (scoreValues[j] !== null)){
        return currentPlayer === "0" ? "X" : "0";
      }
      j = j + 1;
    }

    let k = 0;
    if ((scoreValues[k] === scoreValues[k+4]) && (scoreValues[k] === scoreValues[k+8]) && (scoreValues[k] !== null)) {
      return currentPlayer === "0" ? "X" : "0";
    }
    else if ((scoreValues[k+2] === scoreValues[k+4]) && (scoreValues[k+4] === scoreValues[k+6]) && (scoreValues[k+2] !== null)) {
      return currentPlayer === "0" ? "X" : "0";
    }
    else {
      return null;
    }
  }, [currentPlayer, scoreValues])

  return ( 
    <div>
      <ScoreBoard currentPlayer={currentPlayer} gameStatus='Running' winner={winner}></ScoreBoard>
      <TicTacToeGrid grid9Values={scoreValues} handleCellClick={onCellClick} winnerIndex={WinnerCellIndices}/>
      <button className='resetButton'>Reset</button>
    </div>

  );
}

export default App;
