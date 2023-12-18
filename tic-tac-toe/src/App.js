import "./components/Square";
//import { useState } from "react";
import Square from "./components/Square";
import { useState } from "react";

export default function App(){
  const[isNext, setIsNext] = useState(true);
  const[square, setSquares] = useState(Array(9).fill(null));
  function handleClick(i){
    if(calculateWinner(square) || square[i]){
      return;
    }
    const nextSquares = square.slice();
    if(isNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O"; 
    }
    setSquares(nextSquares);
    setIsNext(!isNext);
  }

  const winner = calculateWinner(square);
  let Status;
  if(winner){
    Status = "The Winner is: " + winner;
  }
  else{
    Status = "Next player: " + (isNext ? 'X':'O');
  }

  function calculateWinner(square){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    
    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(square[a]&&square[a] === square[b]&&square[a] === square[c]){
      return square[a];
      }
    }
    return null;

  }

  
  
  return(
    <div>
  <div className="status">{Status}</div>
  <div className="board-row">
  <Square value = {square[0]} onSquareClick = {()=>handleClick(0)} />
  <Square value = {square[1]} onSquareClick = {()=>handleClick(1)} />
  <Square value = {square[2]} onSquareClick = {()=>handleClick(2)} />
  </div>
  <div className="board-row">
  <Square value = {square[3]} onSquareClick = {()=>handleClick(3)} />
  <Square value = {square[4]} onSquareClick = {()=>handleClick(4)} />
  <Square value = {square[5]} onSquareClick = {()=>handleClick(5)} />
  </div>
  <div className="board-row">
  <Square value = {square[6]} onSquareClick = {()=>handleClick(6)} />
  <Square value = {square[7]} onSquareClick = {()=>handleClick(7)} />
  <Square value = {square[8]} onSquareClick = {()=>handleClick(8)} />
  </div>
  </div>
  
  );
  
}