import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import './styles.css'

export default function Box ({ value, position }) {
  const { setBoxes, turn } = useContext(GameContext)

  const handleClickBoxButton = () => {
    setBoxes(boxes => {
      boxes[position] = 1
      return [...boxes]
    })
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
