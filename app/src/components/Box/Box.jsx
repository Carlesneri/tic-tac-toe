import React, { useEffect, useState } from 'react'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'

const { BUTTON_VALUES } = CONSTANTS

export default function Box ({ value, position, playPlayer, changeTurn, isWinner, turn, setTurn, winnerPositions, arePlaying }) {
  const buttonValue = BUTTON_VALUES[value]
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
