import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import Box from '../Box/Box'
import './styles.css'

export default function Board () {
  const { boxes, turn, setTurn, winnerPositions, arePlaying } = useContext(GameContext)
  const { playPlayer, changeTurn, isWinner } = useGame()

  return (
    <div className='container'>
      <div className='board'>
        {
          boxes.map((box, index) =>
            <Box
              value={box.player}
              key={index}
              position={index}
              playPlayer={playPlayer}
              changeTurn={changeTurn}
              isWinner={isWinner}
              turn={turn}
              setTurn={setTurn}
              winnerPositions={winnerPositions}
              arePlaying={arePlaying}
            />)
        }
      </div>
    </div>
  )
}
