import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () => {
    console.log("apaa")
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    console.log("pepepepepep")
    const newBoard = [...board];
    newBoard[index] = turn;
    console.log("new board", newBoard)
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
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
