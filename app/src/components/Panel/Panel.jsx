import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import config from '../../config'
import getAvailableBoxes from '../../helpers/getAvailableBoxes'

const { COMPUTER_TIME } = config

export default function Panel () {
  const [isPlaying, setIsPlaying] = useState(false)
  const { playComputer, changeTurn } = useGame()
  const { boxes, turn, setTurn } = useContext(GameContext)
  const [message, setMessage] = useState('')

  const handleClickStartButton = () => {
    const turn = Math.ceil(Math.random() * 2)
    setTurn(turn)
  }

  useEffect(() => {
    if (turn === 2) {
      setIsPlaying(true)
      setTimeout(() => {
        playComputer()
        setIsPlaying(false)
        changeTurn()
      }, COMPUTER_TIME)
    }
  }, [turn])

  useEffect(() => {
    if (getAvailableBoxes(boxes).length === 0) {
      setMessage('Finish')
    } else {
      isPlaying ? setMessage('playing computer...') : setMessage('play!')
    }
  }, [boxes, isPlaying])

  return (
    <div className='container'>
      <div className='panel'>
        {
        (turn === null)
          ? (
            <div className='buttons'>
              <div className='button'>
                <button onClick={handleClickStartButton}>start</button>
              </div>
            </div>
            )
          : (
            <div className='message'>
              {message}
            </div>
            )
        }
      </div>
    </div>
  )
}
