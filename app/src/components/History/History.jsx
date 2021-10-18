import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Context/GameContext'
import useGame from '../../hooks/useGame'
import './styles.css'

export default function History () {
  const { history, arePlaying } = useContext(GameContext)
  const [sortedHistory, setSortedHistory] = useState([])
  const { cleanHistory, fillBoard } = useGame()
  const [score, setScore] = useState({})

  useEffect(() => {
    const sorted = history.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    setSortedHistory(sorted)
    const { won, loses } = history.reduce((prev, curr) => {
      if (curr.result === 'win') return { won: prev.won++, ...prev }
      if (curr.result === 'lose') return { loses: prev.loses++, ...prev }
      return prev
    }, { won: 0, loses: 0 })
    setScore({ won, loses })
  }, [history])

  const handleClickCleanHistoryButton = () => {
    cleanHistory()
  }

  const handleClickPlayGameHistoryButon = (gameBoxes) => {
    fillBoard(gameBoxes)
  }

  return (
    <div className='container history'>
      <div className='header'>
        <h2>history</h2>
        <button className='glass' onClick={handleClickCleanHistoryButton}>
          clean history
        </button>
      </div>
      <div>
        {
        history.length > 0
          ? (
            <div>
              <div className='score'>
                score: <span className='win'>{score.won}</span> / <span className='lose'>{score.loses}</span>
              </div>
              <ul>
                {sortedHistory.map((game) => {
                  return (
                    <li key={game._id} className='game'>
                      <span className={game.result}>{game.result}</span>
                      {!arePlaying && (
                        <button
                          className='glass'
                          onClick={() =>
                            handleClickPlayGameHistoryButon(game.boxes)}
                        >
                          play
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
            )
          : (
            <div>No games saved</div>
            )
        }
      </div>
    </div>
  )
}