import { useContext } from 'react'
import { GameContext } from '../Context/GameContext'
import findWinner from '../helpers/findWinner'
import getThrow from '../helpers/getThrow'
import getAvailableBoxes from '../helpers/getAvailableBoxes'
import CONSTANTS from '../CONSTANTS'
import axios from 'axios'
import getComputerBox from '../helpers/getComputerBox'

const { BASE_URL, RESULTS } = CONSTANTS

export default () => {
  const { boxes, setBoxes, turn, setTurn } = useContext(GameContext)

  const startGame = () => {
    setBoxes(Array(9).fill({ player: 0, throw: 0 }))
  }

  const playPlayer = (position) => {
    if (turn === 1 && !isWinner()) {
      const availableBoxes = getAvailableBoxes(boxes)
      setBoxes(boxes => {
        boxes[position] = { player: 1, throw: getThrow(availableBoxes.length) }
        return [...boxes]
      })
    }
  }

  const playComputer = () => {
    if (turn === 2 && !isWinner()) {
      const availableBoxes = getAvailableBoxes(boxes)
      const computerBox = getComputerBox(availableBoxes)
      setBoxes(prevState => {
        prevState[computerBox] = { player: 2, throw: getThrow(availableBoxes.length) }
        return [...prevState]
      })
    }
  }

  const changeTurn = () => {
    if (turn !== null) {
      const newTurn = turn === 1 ? 2 : 1
      setTurn(newTurn)
    }
  }

  const isWinner = () => {
    return findWinner(boxes)
  }

  const saveGame = async () => {
    let result
    const winnerResult = isWinner()
    if (!winnerResult) {
      result = 'draw'
    } else {
      const { winner } = winnerResult
      result = RESULTS[winner]
    }
    const boxesWithValue = boxes.filter(el => el.throw !== 0)
    const body = {
      game: {
        result,
        boxes: boxesWithValue
      }
    }
    try {
      await axios.post(BASE_URL, body)
    } catch (error) {
      console.error(error)
    }
  }

  return { startGame, playPlayer, playComputer, changeTurn, isWinner, saveGame }
}
