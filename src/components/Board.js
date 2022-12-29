import { getSudoku } from "sudoku-gen";
export default function QuestionBoard(){
    let sudoku = getSudoku("easy");
  sudoku = sudoku.puzzle;
  console.log(sudoku);
  let count = 0;
  let temp = [];
  for (var i = 0; i < 9; i++) {
    let str = sudoku.substring(count, count + 9);
    str = str
      .trim()
      .split("")
      .map((e) => {
        return isNaN(e) ? 0 : +e;
      });

    temp.push(str);
    count = count + 9;
  }
  
  return temp
}