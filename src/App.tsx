import "./App.css";
import { ScoreBoard } from "./ScoreBoard";
import { TicTacToeGrid } from "./TicTacToeGrid";
import { useTicTacToeGame } from "./useTicTacToeGame";

function App() {
  const {
    currentPlayer,
    gameStatus,
    winnerDetail,
    scoreValues,
    handleCellClick,
    handleReset,
  } = useTicTacToeGame();

  return (
    <div>
      <ScoreBoard
        currentPlayer={currentPlayer}
        gameStatus={gameStatus}
        winner={winnerDetail.winner}
      />
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
