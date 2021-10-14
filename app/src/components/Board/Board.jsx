import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import Box from '../Box/Box'
import './styles.css'

export default function Board ({ canPlay }) {
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
              canPlay={canPlay}
            />)
        }
      </div>
    </div>
  )
}
