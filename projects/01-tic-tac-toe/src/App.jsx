import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1, 4, 7],
  [2,5,8],
  [0,4,8],
  [2,4,5]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo;
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // no hay ganador
    return null;
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición si ya tenemos algo
    if (board[index] || winner) return;
    // actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      setWinner(newWinner); // La actualización del estado es asíncrona.
      alert(`El ganador es ${newWinner}`)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe
      </h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}>
              {square}
              </Square>
            )
          })
        }
       </section>
       <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
         {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
