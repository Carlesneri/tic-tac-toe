import { useContext, useEffect } from 'react'
import { GameContext } from '../Context/GameContext'
import findWinner from '../helpers/findWinner'
import getThrow from '../helpers/getThrow'
import getAvailableBoxes from '../helpers/getAvailableBoxes'
import CONSTANTS from '../CONSTANTS'
import axios from 'axios'
import getComputerBox from '../helpers/getComputerBox'

const { BASE_URL, RESULTS } = CONSTANTS

export default () => {
  const { boxes, setBoxes, turn, setTurn, setHistory, arePlaying, setArePlaying } = useContext(GameContext)

  useEffect(() => {
    updateHistory()
  }, [])

  const startGame = () => {
    cleanBoard()
    setArePlaying(true)
    const turn = Math.ceil(Math.random() * 2)
    setTurn(turn)
  }

  const cleanBoard = () => {
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
    if (!arePlaying) return
    let result
    const winnerResult = isWinner()
    if (!winnerResult) {
      result = RESULTS.draw
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
      updateHistory()
    } catch (error) {
      console.error(error)
    }
  }

  const updateHistory = async () => {
    const res = await axios.get(BASE_URL)
    const { games } = res.data
    setHistory(games)
  }

  const cleanHistory = async () => {
    await axios.delete(BASE_URL)
    setHistory([])
  }

  const fillBoard = gameBoxes => {
    if (arePlaying) return
    cleanBoard()
    gameBoxes.forEach((box, index) => {
      setTimeout(() => {
        setBoxes(prevState => {
          prevState[index] = { player: box.player, throw: box.throw }
          return [...prevState]
        })
      }, box.throw * 500)
    })
  }

  return { startGame, playPlayer, playComputer, changeTurn, isWinner, saveGame, cleanHistory, fillBoard }
}
