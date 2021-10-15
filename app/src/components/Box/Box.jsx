import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'

const { BUTTON_VALUES } = CONSTANTS

export default function Box ({ value, position }) {
  const { turn, setTurn, winnerPositions } = useContext(GameContext)
  const { playPlayer, changeTurn, isWinner } = useGame()
  const [styles, setStyles] = useState('disabled')

  useEffect(() => {
    if (winnerPositions.length) {
      const isWinnerPosition = winnerPositions.some(el => el === position)
      if (isWinnerPosition) {
        setStyles('winner')
      }
    } else {
      turn === 1 ? setStyles('') : setStyles('disabled')
    }
  }, [winnerPositions, turn])

  const buttonValue = BUTTON_VALUES[value]

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
        className={styles}
      >
        {buttonValue}
      </button>
    </div>
  )
}
