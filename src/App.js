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
    if(nextSqueres[i] || calculaVencedor(squares)){
      return;
    }
    if (xIsNext){
      nextSqueres[i] = 'X';
    }
    else{
      nextSqueres[i] = 'O';
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

function calculaVencedor(squares){
  const lines = ([0, 1, 2], [3, 4, 5], [6, 7, 8], 
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
              [0, 4, 8], [2, 4, 6]);

  for(let i = 0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
  return null;
}