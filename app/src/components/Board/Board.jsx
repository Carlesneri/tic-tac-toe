import React, { useContext, useEffect } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import Box from '../Box/Box'
import './styles.css'

export default function Board () {
  const { boxes } = useContext(GameContext)

  return (
    <div className='container'>
      <div className='board'>
        {
          boxes.map((box, index) =>
            <Box
              value={box}
              key={index}
              position={index}
            />)
        }
      </div>
    </div>
  )
}
