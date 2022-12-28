import React from 'react'

import { getSudoku } from 'sudoku-gen';
export default function SudokuGenerator() {
    let sudoku = getSudoku('easy');
    sudoku=sudoku.puzzle.trim().split("");
    console.log(sudoku)
    let count=0
    for(var i=0;i<sudoku.length;i=i+9){
        let arr=[]
        // console.log(sudoku[i])
       // console.log(arr)
    }
    
  return (
    <div>SudokuGenerator</div>
  )
}
