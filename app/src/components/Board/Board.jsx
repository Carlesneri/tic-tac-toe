import React from 'react'
import Box from '../Box/Box'
import './Board.css'

export default function Board({boxes, setBoxes}) {
  return (
    <div className="container">
      <div className="board">
        {boxes.map((box, index) => <Box value={box} setBoxes={setBoxes} key={index} position={index + 1} />)}
      </div>
    </div>
  )
}
