import { useEffect, useState } from 'react'
import './styles.css'

export default ({ game, handleClickPlayGameHistoryButon, arePlaying }) => {
  const [gameButtonVisibility, setGameButtonVisibility] = useState('hidden')

  useEffect(() => {
    const visibility = arePlaying ? 'hidden' : 'visible'
    setGameButtonVisibility(visibility)
  }, [arePlaying])

  return (
    <li key={game._id} className='game'>
      <span className={game.result}>{game.result}</span>
      <button
        style={{ visibility: gameButtonVisibility }}
        className='glass'
        onClick={() =>
          handleClickPlayGameHistoryButon(game.boxes)}
      >
        play
      </button>
    </li>
  )
}
