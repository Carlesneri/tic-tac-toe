import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import './styles.css'

export default function Panel () {
  const { turn, setTurn } = useContext(GameContext)

  const handleClickStartButton = () => {
    const turn = Math.ceil(Math.random() * 2)
    setTurn(turn)
  }

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
      </div>
    </div>
  )
}
