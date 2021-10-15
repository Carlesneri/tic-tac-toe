import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'
import getAvailableBoxes from '../../helpers/getAvailableBoxes'

const { COMPUTER_TIME, PLAYERS } = CONSTANTS

export default function Panel () {
  const [isPlaying, setIsPlaying] = useState(false)
  const { playComputer, isWinner, changeTurn } = useGame()
  const { boxes, setBoxes, turn, setTurn, setWinnerPositions } = useContext(GameContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (isWinner()) {
      const { winner, positions } = isWinner()
      setMessage(`${PLAYERS[winner]} win!`)
      setWinnerPositions([...positions])
      setTurn(null)
    } else {
      if (getAvailableBoxes(boxes).length === 0) {
        setMessage('Finish')
        setTurn(null)
      } else {
        turn && (isPlaying ? setMessage('playing computer...') : setMessage('play!'))
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
