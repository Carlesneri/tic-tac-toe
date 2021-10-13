import React from 'react'
import './Box.css'

export default function Box({value, position, setBoxes}) {
  const handleClickBoxButton = () => {
    setBoxes(boxes => {
      boxes[position - 1] = 1
      return [...boxes]
    })
  }

  return (
    <div className="box">
      <button onClick={handleClickBoxButton}>
        {value}
      </button>
    </div>
  )
}
