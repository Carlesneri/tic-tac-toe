import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'

export default function History () {
  const { history, arePlaying } = useContext(GameContext)
  const [sortedHistory, setSortedHistory] = useState([])
  const { cleanHistory, fillBoard } = useGame()

  useEffect(() => {
    const sorted = history.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
    setSortedHistory(sorted)
  }, [history])

  const handleClickCleanHistoryButton = () => {
    cleanHistory()
  }

  const handleClickPlayGameHistoryButon = gameBoxes => {
    fillBoard(gameBoxes)
  }

  return (
    <div className='container history'>
      <h2>
        history
      </h2>
      <button onClick={handleClickCleanHistoryButton}>
        Clean history
      </button>
      <div>
        <ul>
          {sortedHistory.map(game => {
            return (
              <li key={game._id}>
                <span>
                  {game.result}
                </span>
                {
                  !arePlaying && (
                    <button onClick={() => handleClickPlayGameHistoryButon(game.boxes)}>
                      play
                    </button>
                  )
                }
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
