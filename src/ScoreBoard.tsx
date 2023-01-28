import { PlayableValue, GameStatus } from "./type"
import './ScoreBoard.css';

type ScoreBoardPropType = {
  currentPlayer?: PlayableValue,
  gameStatus: GameStatus,
  winner?: PlayableValue;
}

export const ScoreBoard = (props : ScoreBoardPropType) => {
  const { currentPlayer, gameStatus, winner } = props;

  const renderElement = () => {
      if (gameStatus === "Running") {
        return <div>Now playing : {currentPlayer}</div>;
      }
      else if (gameStatus === "Win") {
        return <div>Game Over: Winner {winner}</div>
      }
      else if (gameStatus === "Draw") {
        return <div>Game Status : {gameStatus}</div>
      }
  }

  return (
    <div className="currentStatusContainer">
      {renderElement()}
    </div>
  )
}