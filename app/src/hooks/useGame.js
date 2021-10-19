import { useContext } from 'react'
import { GameContext } from '../Context/GameContext'
import findWinner from '../helpers/findWinner'
import getThrow from '../helpers/getThrow'
import getAvailableBoxes from '../helpers/getAvailableBoxes'
import CONSTANTS from '../CONSTANTS'
import axios from 'axios'
import getComputerBox from '../helpers/getComputerBox'
import { v1 as uuidV1 } from 'uuid'
import { useCookies } from 'react-cookie'

const { BASE_URL, RESULTS, COOKIE_SESSION_NAME } = CONSTANTS

const axiosInstance = axios.create({ withCredentials: true })

export default () => {
  const { boxes, setBoxes, turn, setTurn, setHistory, arePlaying, setArePlaying, setWinnerPositions } = useContext(GameContext)
  const [cookies, setCookies] = useCookies([COOKIE_SESSION_NAME])

  const startGame = () => {
    cleanBoard()
    setArePlaying(true)
    const turn = Math.ceil(Math.random() * 2)
    setTurn(turn)
  }

  const cleanBoard = () => {
    setBoxes(Array(9).fill({ player: 0, throw: 0 }))
    setWinnerPositions([])
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
      const computerBox = getComputerBox(availableBoxes, boxes)
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
    const body = {
      game: {
        result,
        boxes
      }
    }
    try {
      await axiosInstance.post(BASE_URL, body)
      updateHistory()
    } catch (error) {
      console.log(error)
    }
  }

  const updateHistory = async () => {
    if (!cookies[COOKIE_SESSION_NAME]) {
      setCookies(COOKIE_SESSION_NAME, uuidV1())
    }
    try {
      const res = await axiosInstance.get(BASE_URL)
      const { games } = res.data
      setHistory(games)
    } catch (error) {
      console.log(error)
    }
  }

  const cleanHistory = async () => {
    try {
      await axiosInstance.delete(BASE_URL)
      setHistory([])
    } catch (error) {
      console.log(error)
    }
  }

  const fillBoard = gameBoxes => {
    if (arePlaying) return
    cleanBoard()
    gameBoxes.forEach((box, index) => {
      box.throw && setTimeout(() => {
        setBoxes(prevState => {
          prevState[index] = { player: box.player, throw: box.throw }
          return [...prevState]
        })
      }, box.throw * 500)
    })
  }

  return { startGame, playPlayer, playComputer, changeTurn, isWinner, saveGame, cleanHistory, fillBoard, updateHistory }
}
