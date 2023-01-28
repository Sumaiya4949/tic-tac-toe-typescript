import { PlayableValue, GameStatus } from "./type"
import './ScoreBoard.css';

type ScoreBoardPropType = {
  currentPlayer?: PlayableValue,
  gameStatus: GameStatus,
  winner?: PlayableValue;
}

export const ScoreBoard = (props : ScoreBoardPropType) => {
  const { currentPlayer, gameStatus, winner } = props;

  return (
    <div className="currentStatusContainer">
      {gameStatus === "Running" && <div>Now playing : {currentPlayer}</div>}
      {gameStatus === "Win" && <div>Game Over: Winner {winner}</div>}
      {gameStatus === "Draw" && <div>Game Status : {gameStatus}</div>}
    </div>
  )
}