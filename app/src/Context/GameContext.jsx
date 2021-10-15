import { createContext, useState } from 'react'

const GameContext = createContext()

const GameProvider = ({ children }) => {
  // Creating a state. Possible values: [0: not selected, 1: player, 2:computer]
  const [boxes, setBoxes] = useState(Array(9).fill(0))
  const [winnerPositions, setWinnerPositions] = useState([])
  const [turn, setTurn] = useState(null)

  return (
    <GameContext.Provider value={{ boxes, setBoxes, turn, setTurn, winnerPositions, setWinnerPositions }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext }
