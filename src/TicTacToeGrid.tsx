import './TicTacToeGrid.css';
import type { CellClickHandler, Grid9Values, WinnerCellIndices } from "./TicTacToeGridType"

type TicTacToeGridPropType = {
  cellClickHandler: CellClickHandler;
  score: Grid9Values;
  winnerIndex: WinnerCellIndices;
}

export const TicTacToeGrid = (props : TicTacToeGridPropType) => {
    return (
    <div className="grid-container">
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </div>)
}