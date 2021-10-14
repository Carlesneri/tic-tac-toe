import { useContext } from 'react'
import { GameContext } from '../Context/GameContext'
import getAvailableBoxes from '../helpers/getAvailableBoxes'

export default () => {
  const { boxes, setBoxes, turn, setTurn } = useContext(GameContext)

  const playPlayer = (position) => {
    setBoxes(boxes => {
      boxes[position] = 1
      return [...boxes]
    })
  }

  const playComputer = () => {
    // retrieving the indexes available
    const availableBoxes = getAvailableBoxes(boxes)

    // getting a random index of the available boxes
    const randomBox = Math.floor(Math.random() * availableBoxes.length)

    const availableBox = availableBoxes[randomBox]

    setBoxes(prevState => {
      prevState[availableBox] = 2
      return prevState
    })
  }

  const changeTurn = () => {
    if (turn === null) return
    const newTurn = turn === 1 ? 2 : 1
    setTurn(newTurn)
  }

  return { playPlayer, playComputer, changeTurn }
}
