import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'
import CONSTANTS from '../../CONSTANTS'

const { BUTTON_VALUES } = CONSTANTS

export default function Box ({ value, position }) {
  const { turn, setTurn } = useContext(GameContext)
  const { playPlayer, changeTurn, isWinner } = useGame()

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
        className={turn === 1 ? '' : 'disabled'}
      >
        {buttonValue}
      </button>
    </div>
  )
}
