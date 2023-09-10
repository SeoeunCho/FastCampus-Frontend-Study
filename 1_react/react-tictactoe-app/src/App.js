import { useState } from 'react';
import './App.css';
import Board from "./components/Board";

const App = () => {
  const [history, setHistory] = useState([ { squares: Array(9).fill(null) } ]);
  const [xIsNext, setXIsNext] = useState(true);
  console.log(history)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    // squares 복사본 생성
    const newSquares = current.squares.slice();

    // 승리자 발생 및 중복클릭 방지
    if (calculateWinner(newSquares) || newSquares[i]) return;

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: newSquares}]);
    setXIsNext(prev => !prev);
  }


  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        <div className='status'>{ status }</div>
      </div>
      <div className="game-info">
        <div>get info</div>
        <ol></ol>
      </div>
    </div>
  );
}

export default App;
