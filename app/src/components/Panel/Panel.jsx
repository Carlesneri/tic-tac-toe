import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'
import getAvailableBoxes from '../../helpers/getAvailableBoxes'

const { COMPUTER_TIME, WINNER_MESSAGE } = CONSTANTS

export default function Panel () {
  const [isPlaying, setIsPlaying] = useState(false)
  const { playComputer, isWinner, changeTurn } = useGame()
  const { boxes, setBoxes, turn, setTurn, setWinnerPositions } = useContext(GameContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (isWinner()) {
      setTurn(null)
      const { winner, positions } = isWinner()
      setMessage(WINNER_MESSAGE[winner])
      setWinnerPositions([...positions])
    } else {
      if (getAvailableBoxes(boxes).length === 0) {
        setTurn(null)
        setMessage('Finish')
      }
    }
  }, [boxes])

  useEffect(() => {
    if (turn === 2) {
      setIsPlaying(true)
      setTimeout(() => {
        playComputer()
        changeTurn()
        setIsPlaying(false)
      }, COMPUTER_TIME)
    }
  }, [turn])

  useEffect(() => {
    if (turn) {
      isPlaying ? setMessage('playing computer...') : setMessage('play!')
    }
  }, [turn, isPlaying])

  const handleClickStartButton = () => {
    setBoxes(Array(9).fill(0))
    setWinnerPositions([])
    setMessage('')
    const turn = Math.ceil(Math.random() * 2)
    setTurn(turn)
  }

  return (
    <div className='container'>
      <div className='panel'>
        <div className='buttons'>
          <div className='button'>
            <button onClick={handleClickStartButton}>
              {turn === null ? 'start' : 'new game'}
            </button>
          </div>
        </div>
        {
          (
            message && (
              <div className='message'>
                {message}
              </div>
            )
          )
        }
      </div>
    </div>
  )
}
