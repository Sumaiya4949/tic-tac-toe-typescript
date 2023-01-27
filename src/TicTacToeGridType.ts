type X = string;
export type PlayableValue = 0 | X;
export type CellValue = PlayableValue | null;
export type CellIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Grid9Values = [CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue];
export type  WinnerCellIndices = [CellIndex, CellIndex, CellIndex] | null;
export type CellClickHandler = (cellIndex: CellIndex) => void;
