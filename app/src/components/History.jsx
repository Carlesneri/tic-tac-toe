import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../Context/GameContext'
import useGame from '../hooks/useGame'

export default function History () {
  const { history } = useContext(GameContext)
  const [sortedHistory, setSortedHistory] = useState([])
  const { cleanHistory } = useGame()
  const handleClickCleanHistoryButton = () => {
    cleanHistory()
  }

  useEffect(() => {
    const sorted = history.sort((a, b) => a.createdAt - b.createdAt)
    setSortedHistory(sorted)
  }, [history])

  return (
    <div className='container'>
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
                {game.result}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
