import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import { ScoreBoard } from "./ScoreBoard";
import { TicTacToeGrid } from "./TicTacToeGrid";
import type {
  CellClickHandler,
  CellIndex,
  Grid9Values,
  WinnerCellIndices,
  PlayableValue,
} from "./type";

const values: Grid9Values = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<PlayableValue>("X");
  const [scoreValues, setScoreValues] = useState<Grid9Values>(values);

  const winnerCellIndices: WinnerCellIndices = null;

  const winner = useMemo(() => {
    let i = 0;
    while (i < 7) {
      if (
        scoreValues[i] === scoreValues[i + 1] &&
        scoreValues[i] === scoreValues[i + 2] &&
        scoreValues[i] !== null
      ) {
        return scoreValues[i];
      }
      i = i + 3;
    }

    let j = 0;
    while (j < 3) {
      if (
        scoreValues[j] === scoreValues[j + 3] &&
        scoreValues[j] === scoreValues[j + 6] &&
        scoreValues[j] !== null
      ) {
        return scoreValues[j];
      }
      j = j + 1;
    }

    let k = 0;
    if (
      scoreValues[k] === scoreValues[k + 4] &&
      scoreValues[k] === scoreValues[k + 8] &&
      scoreValues[k] !== null
    ) {
      return scoreValues[k];
    } else if (
      scoreValues[k + 2] === scoreValues[k + 4] &&
      scoreValues[k + 4] === scoreValues[k + 6] &&
      scoreValues[k + 2] !== null
    ) {
      return scoreValues[k + 2];
    } else {
      return null;
    }
  }, [scoreValues]);

  const onCellClick: CellClickHandler = useCallback(
    (cellIndex: CellIndex) => {
      if (winner === null) {
        setScoreValues((prevScores: Grid9Values) => {
          return prevScores.map((item, index) => {
            if (index === cellIndex) return currentPlayer === "X" ? "X" : "0";
            else return item;
          }) as Grid9Values;
        });

        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "0" : "X"));
      }
    },
    [currentPlayer, winner]
  );

  return (
    <div>
      <ScoreBoard
        currentPlayer={currentPlayer}
        gameStatus="Running"
        winner={winner}
      ></ScoreBoard>
      <TicTacToeGrid
        grid9Values={scoreValues}
        handleCellClick={onCellClick}
        winnerIndex={winnerCellIndices}
      />
      <button className="resetButton">Reset</button>
    </div>
  );
}

export default App;
