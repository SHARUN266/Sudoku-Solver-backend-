import React, { useEffect } from 'react'
import Example from "./components/Board"
export default function Fake() {
    let puzzle = Array(9)
  .fill(null)  
  .map(() => Array(9).fill(0));
  
    useEffect(()=>{
       
      Example(puzzle)
      console.log(puzzle)
    },[])
    
  return (
    <div>Fake</div>
  )
}
