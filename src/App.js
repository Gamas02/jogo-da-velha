import { useState } from 'react';
import './App.css';

function Square({valor, onSquareClick}){
  return(
    <button classname="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleCklick(i){
    const nextSqueres = squares.slice();
    if(nextSqueres[i]){
      return;
    }
    if (xIsNext){
      nextSqueres[i] = 'X';
      setXIsNext(false)
    }
    else{
      nextSqueres[i] = 'O';
      setXIsNext(true)
    }
    setXIsNext(!xIsNext);
    setSquares(nextSqueres);
  }

  return(
    <div>
      <div>
        <Square valor={squares[0]} onSquareClick={() => handleCklick(0)}/>
        <Square valor={squares[1]} onSquareClick={() => handleCklick(1)}/>
        <Square valor={squares[2]} onSquareClick={() => handleCklick(2)}/>
      </div>
      <div>
        <Square valor={squares[3]} onSquareClick={() => handleCklick(3)}/>
        <Square valor={squares[4]} onSquareClick={() => handleCklick(4)}/>
        <Square valor={squares[5]} onSquareClick={() => handleCklick(5)}/>
      </div>
      <div>
        <Square valor={squares[6]} onSquareClick={() => handleCklick(6)}/>
        <Square valor={squares[7]} onSquareClick={() => handleCklick(7)}/>
        <Square valor={squares[8]} onSquareClick={() => handleCklick(8)}/>
      </div>
    </div>
  );
}