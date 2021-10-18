import './App.css'
import Board from './components/Board/Board'
import Header from './components/Header/Header'
import History from './components/History/History'
import Panel from './components/Panel/Panel'
import { GameProvider } from './Context/GameContext'

function App () {
  return (
    <GameProvider>
      <Header />
      <Panel />
      <div className='container board-history'>
        <Board />
        <History />
      </div>
    </GameProvider>
  )
}

export default App
