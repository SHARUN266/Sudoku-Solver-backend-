// let count=0

// export default function SolverSudoku(board,row,col){
//     if(row==9){
//         // Print(board)
//         count++
//         return board
//     }
//     let newRow=0;
//     let newCol=0;
//     if(col==8){
//         newRow=row+1;
//         newCol=0
//     }else{
//         newRow=row
//         newCol=col+1
//     }
    
//     if(board[row][col]!=0){
//         SolverSudoku(board,newRow,newCol)
//     }else{
//         for(var i=1;i<=9;i++){
//            if(CheckSafe(board,row,col,i)==true){
//                board[row][col]=i
//                SolverSudoku(board,newRow,newCol)
//                board[row][col]=0
//            }
//         }
//     }
// }

// function CheckSafe(board,row,col,value){
    
//      for(var i=0;i<9;i++){
//          if(board[i][col]==value){
//              return false
//          }
//      }
//      for(var i=0;i<9;i++){
//          if(board[row][i]==value){
//              return false
//          }
//      }
     
//      // Check value in grid our value exist or not
//       var x = Math.floor(row/3)*3;
//     var y = Math.floor(col/3)*3;

//     for(var l=0;l<3;l++){
//         for(var m=0;m<3;m++){
//             if( board[l+x][m+y] == value){
//                 return false
//             }
//         }
//     }
//     return true;
// }
// // Print out board
// function Print(board){
//     for(let i=0;i<board.length;i++){
//         console.log(board[i].join(" "))
//     }
// }
