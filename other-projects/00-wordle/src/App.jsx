import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

const letters = ['A', 'B', 'C', 'D', 'E']

function App() {
  return (
    <>
      {
        letters.map((letter) => 
          <Button text={letter}></Button>
        )
      }
    </>
  )
}

export default App
