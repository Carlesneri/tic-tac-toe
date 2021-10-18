import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'

const { BUTTON_VALUES } = CONSTANTS

export default function Box ({ value, position }) {
  const buttonValue = BUTTON_VALUES[value]
  const { turn, setTurn, winnerPositions, arePlaying } = useContext(GameContext)
  const { playPlayer, changeTurn, isWinner } = useGame()
  const [styles, setStyles] = useState('disabled')

  useEffect(() => {
    if (winnerPositions.length) {
      const isWinnerPosition = winnerPositions.some(el => el === position)
      if (isWinnerPosition) {
        setStyles('disabled winner')
      } else {
        setStyles('disabled')
      }
    } else {
      (!arePlaying || turn === 2) && setStyles('disabled')
      turn === 1 && value === 0 && setStyles('')
      turn === 1 && value !== 0 && setStyles('taken')
    }
  }, [winnerPositions, turn])

  const handleClickBoxButton = () => {
    if (value === 0) {
      playPlayer(position)
      if (isWinner()) {
        setTurn(null)
      } else {
        changeTurn()
      }
    }
  }

  return (
    <div className='box'>
      <button
        onClick={handleClickBoxButton}
        className={`${styles} glass`}
      >
        {buttonValue}
      </button>
    </div>
  )
}
