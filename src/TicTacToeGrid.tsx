import './TicTacToeGrid.css';
import type { CellClickHandler, Grid9Values, WinnerCellIndices, CellIndex } from "./TicTacToeGridType"

type TicTacToeGridPropType = {
  cellClickHandler: CellClickHandler;
  grid9Values: Grid9Values;
  winnerIndex: WinnerCellIndices;
}

export const TicTacToeGrid = (props : TicTacToeGridPropType) => {
  const {cellClickHandler, grid9Values, winnerIndex} = props;

  const getWinnerIndexStyle = (cellIndex: CellIndex) => {
    if (winnerIndex?.includes(cellIndex)){
      return {
        backgroundColor : 'pink'
      }
    }
  }

    return (
    <div className="grid-container">
      <button className="grid-item" style={getWinnerIndexStyle(0)} onClick={() => cellClickHandler(0)}>{grid9Values[0]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(1)} onClick={() => cellClickHandler(1)}>{grid9Values[1]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(2)} onClick={() => cellClickHandler(2)}>{grid9Values[2]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(3)} onClick={() => cellClickHandler(3)}>{grid9Values[3]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(4)} onClick={() => cellClickHandler(4)}>{grid9Values[4]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(5)} onClick={() => cellClickHandler(5)}>{grid9Values[5]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(6)} onClick={() => cellClickHandler(6)}>{grid9Values[6]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(7)} onClick={() => cellClickHandler(7)}>{grid9Values[7]}</button>
      <button className="grid-item" style={getWinnerIndexStyle(8)} onClick={() => cellClickHandler(8)}>{grid9Values[8]}</button>
    </div>)
}