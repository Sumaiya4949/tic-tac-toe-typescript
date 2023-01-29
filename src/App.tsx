import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import { ScoreBoard } from "./ScoreBoard";
import { TicTacToeGrid } from "./TicTacToeGrid";
import type {
  CellClickHandler,
  CellIndex,
  Grid9Values,
  PlayableValue,
  WinnerDetail,
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

  const winnerDetail: WinnerDetail = useMemo(() => {
    let i = 0;
    while (i < 7) {
      if (
        scoreValues[i] === scoreValues[i + 1] &&
        scoreValues[i] === scoreValues[i + 2] &&
        scoreValues[i] !== null
      ) {
        return {
          winner: scoreValues[i],
          winnerIndices: [i, i + 1, i + 2],
        } as WinnerDetail;
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
        return {
          winner: scoreValues[j],
          winnerIndices: [j, j + 3, j + 6],
        } as WinnerDetail;
      }
      j = j + 1;
    }

    let k = 0;
    if (
      scoreValues[k] === scoreValues[k + 4] &&
      scoreValues[k] === scoreValues[k + 8] &&
      scoreValues[k] !== null
    ) {
      return {
        winner: scoreValues[k],
        winnerIndices: [k, k + 4, k + 8],
      } as WinnerDetail;
    } else if (
      scoreValues[k + 2] === scoreValues[k + 4] &&
      scoreValues[k + 4] === scoreValues[k + 6] &&
      scoreValues[k + 2] !== null
    ) {
      return {
        winner: scoreValues[k + 2],
        winnerIndices: [k + 2, k + 4, k + 6],
      } as WinnerDetail;
    } else {
      return { winner: null, winnerIndices: null } as WinnerDetail;
    }
  }, [scoreValues]);

  const handleCellClick: CellClickHandler = useCallback(
    (cellIndex: CellIndex) => {
      if (gameStatus === "Running") {
        setScoreValues((prevScores: Grid9Values) => {
          return prevScores.map((item, index) => {
            if (index === cellIndex) return currentPlayer === "X" ? "X" : "0";
            else return item;
          }) as Grid9Values;
        });

        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "0" : "X"));
      }
    },
    [currentPlayer, winnerDetail]
  );

  const gameStatus = useMemo(() => {
    if (winnerDetail.winner !== null) {
      return "Win";
    } else if (!scoreValues.includes(null)) {
      return "Draw";
    } else {
      return "Running";
    }
  }, [winnerDetail]);

  const handleReset = useCallback(() => {
    setScoreValues([null, null, null, null, null, null, null, null, null]);
    setCurrentPlayer("X");
  }, [winnerDetail]);

  return (
    <div>
      <ScoreBoard
        currentPlayer={currentPlayer}
        gameStatus={gameStatus}
        winner={winnerDetail.winner}
      ></ScoreBoard>
      <TicTacToeGrid
        grid9Values={scoreValues}
        handleCellClick={handleCellClick}
        winnerIndices={winnerDetail.winnerIndices}
      />
      <button className="resetButton" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
