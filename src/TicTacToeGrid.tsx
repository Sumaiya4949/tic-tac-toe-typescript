import { useMemo } from 'react';
import './TicTacToeGrid.css';
import type { CellClickHandler, Grid9Values, WinnerCellIndices, CellIndex } from "./type"

type TicTacToeGridPropType = {
  handleCellClick: CellClickHandler;
  grid9Values: Grid9Values;
  winnerIndices: WinnerCellIndices;
}

export const TicTacToeGrid = (props : TicTacToeGridPropType) => {
  const { handleCellClick, grid9Values, winnerIndices} = props;

  const cellStyle = useMemo(() => {
    let arr = [];
    
    for (let i = 0; i < 9; i++) {
      winnerIndices?.includes(i as CellIndex) ? arr[i] =  {backgroundColor : 'pink'} :  arr[i] = { backgroundColor : 'white'}
    }
    return arr;
  }, [winnerIndices]);

    return (
    <div className="grid-container">
      <button className="grid-item" style={cellStyle[0]} onClick={() => handleCellClick(0)}>{grid9Values[0]}</button>
      <button className="grid-item" style={cellStyle[1]} onClick={() => handleCellClick(1)}>{grid9Values[1]}</button>
      <button className="grid-item" style={cellStyle[2]} onClick={() => handleCellClick(2)}>{grid9Values[2]}</button>
      <button className="grid-item" style={cellStyle[3]} onClick={() => handleCellClick(3)}>{grid9Values[3]}</button>
      <button className="grid-item" style={cellStyle[4]} onClick={() => handleCellClick(4)}>{grid9Values[4]}</button>
      <button className="grid-item" style={cellStyle[5]} onClick={() => handleCellClick(5)}>{grid9Values[5]}</button>
      <button className="grid-item" style={cellStyle[6]} onClick={() => handleCellClick(6)}>{grid9Values[6]}</button>
      <button className="grid-item" style={cellStyle[7]} onClick={() => handleCellClick(7)}>{grid9Values[7]}</button>
      <button className="grid-item" style={cellStyle[8]} onClick={() => handleCellClick(8)}>{grid9Values[8]}</button>
    </div>)
}