import { PlayableValue, GameStatus } from "./type"
import './ScoreBoard.css';

type ScoreBoardPropType = {
  currentPlayer: PlayableValue,
  gameStatus: GameStatus,
  winner: PlayableValue;
}

export const ScoreBoard = (props : ScoreBoardPropType) => {
  const { currentPlayer, gameStatus, winner } = props;

  return (
    <div className="currentStatusContainer">
      <div>Now playing : {currentPlayer}</div>
      { winner === "X" || winner === "0"  ? <div>Game Over: Winner {winner}</div> : <div>Game Over: {gameStatus}</div> }
      <div>Game Status : {gameStatus}</div>
    </div>
  )
}