import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index]) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el tablero
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
  <main className='board'>
    <h1>Tic tac toe</h1>
    <button onClick={resetGame}>Reset del juego</button>
    <section className='game'>
      {
        board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
                {square}
            </Square>
                    )
        })
      }
    </section>
    <section className="turn">
      <Square isSelect={turn === TURNS.X}>
        {TURNS.X}
        </Square>
      <Square isSelect={turn === TURNS.O}>
        {TURNS.O}     
      </Square>
    </section>

   

      <WinnerModal resetGame={resetGame} winner={winner} />
  
  </main>
  )
}

export default App
