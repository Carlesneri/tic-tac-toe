import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'

export default function Box ({ value, position }) {
  const { turn } = useContext(GameContext)
  const { playPlayer, changeTurn } = useGame()

  const handleClickBoxButton = () => {
    if (value === 0) {
      playPlayer(position)
      changeTurn()
    }
  }

  return (
    <div className='box'>
      <button
        onClick={handleClickBoxButton}
        className={!(turn === 1) ? 'disabled' : ''}
      >
        {value}
      </button>
    </div>
  )
}
