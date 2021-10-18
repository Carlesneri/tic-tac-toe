import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'
import getAvailableBoxes from '../../helpers/getAvailableBoxes'

const { COMPUTER_TIME, WINNER_MESSAGE } = CONSTANTS

export default function Panel () {
  const { boxes, turn, setTurn, setWinnerPositions, arePlaying, setArePlaying } = useContext(GameContext)
  const [isComputerPlaying, setIsComputerPlaying] = useState(false)
  const [message, setMessage] = useState('')
  const { startGame, playComputer, isWinner, changeTurn, saveGame } = useGame()

  useEffect(() => {
    if (isWinner()) {
      setTurn(null)
      setArePlaying(false)
      saveGame()
      const { winner, positions } = isWinner()
      setMessage(WINNER_MESSAGE[winner])
      setWinnerPositions([...positions])
    } else {
      if (getAvailableBoxes(boxes).length === 0) {
        setTurn(null)
        setArePlaying(false)
        setMessage(WINNER_MESSAGE[0])
        saveGame()
      }
      setWinnerPositions([])
    }
  }, [boxes])

  useEffect(() => {
    if (turn === 2 && getAvailableBoxes(boxes).length !== 0) {
      setIsComputerPlaying(true)
      setTimeout(() => {
        playComputer()
        changeTurn()
        setIsComputerPlaying(false)
      }, COMPUTER_TIME)
    }
  }, [turn])

  useEffect(() => {
    if (arePlaying) {
      isComputerPlaying ? setMessage('playing computer...') : setMessage('play!')
    }
  }, [turn, isComputerPlaying, arePlaying])

  const handleClickStartButton = () => {
    // setMessage('')
    startGame()
    setWinnerPositions([])
  }

  return (
    <div className='container'>
      <div className='panel'>
        <div className='buttons'>
          <div>
            <button className='glass' onClick={handleClickStartButton}>
              {turn === null ? 'start' : 'new game'}
            </button>
          </div>
        </div>
        <div className='message-container'>
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
    </div>
  )
}
