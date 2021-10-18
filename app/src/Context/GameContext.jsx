import { createContext, useState } from 'react'

const GameContext = createContext()

const GameProvider = ({ children }) => {
  const [boxes, setBoxes] = useState(Array(9).fill({ player: 0, throw: 0 }))
  const [winnerPositions, setWinnerPositions] = useState([])
  const [turn, setTurn] = useState(null)
  const [history, setHistory] = useState([])
  const [arePlaying, setArePlaying] = useState(false)

  return (
    <GameContext.Provider
      value={{
        boxes,
        setBoxes,
        turn,
        setTurn,
        winnerPositions,
        setWinnerPositions,
        history,
        setHistory,
        arePlaying,
        setArePlaying
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext }
