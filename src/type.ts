export type PlayableValue = "0" | "X";
export type CellValue = PlayableValue | null;
export type CellIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Grid9Values = [CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue];
export type  WinnerCellIndices = [CellIndex, CellIndex, CellIndex] | null;
export type CellClickHandler = (cellIndex: CellIndex) => void;
export type GameStatus = "Win" | "Draw" | "Running";
export type WinnerDetail = { winner: PlayableValue | null, winnerIndices: WinnerCellIndices };
