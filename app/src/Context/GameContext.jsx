import { createContext, useState } from 'react'

const GameContext = createContext()

const GameProvider = ({ children }) => {
  // Creating a state. possible values: 0-> not selected, 1-> player, 2->computer
  const [boxes, setBoxes] = useState(Array(9).fill('0'))
  const [turn, setTurn] = useState(null)

  return (
    <GameContext.Provider value={{ boxes, setBoxes, turn, setTurn }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext }
