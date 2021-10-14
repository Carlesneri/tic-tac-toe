import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'

export default function Panel () {
  const { boxes, setBoxes, turn, setTurn } = useContext(GameContext)
  const [isPlaying, setIsPlaying] = useState(false)
  const { playComputer } = useGame()
  const [message, setMessage] = useState('')

  const handleClickStartButton = () => {
    const turn = Math.ceil(Math.random() * 2)
    setTurn(turn)
  }

  useEffect(() => {
    if (turn === 2) {
      setIsPlaying(true)
      playComputer({ boxes, setBoxes })
      setIsPlaying(false)
      setTurn(1)
    }
  }, [turn])

  useEffect(() => {
    isPlaying ? setMessage('playing computer...') : setMessage('')
  }, [isPlaying])

  return (
    <div className='container'>
      <div className='panel'>
        <div className='buttons'>
          <div className='button'>
            <button onClick={handleClickStartButton}>start</button>
          </div>
        </div>
        {
          turn !== null && (
            <div className='message'>
              turn: {turn === 1 ? 'player' : 'computer'}
            </div>
          )
        }
        <div>{message}</div>
      </div>
    </div>
  )
}
