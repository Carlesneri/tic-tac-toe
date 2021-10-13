import { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import Header from './components/Header'
import History from './components/History'
import Panel from './components/Panel'

function App() {
  // Creating a state. possible values: 0-> not selected, 1-> player, 2->computer
  const [boxes, setBoxes] = useState(Array(9).fill('0'))

  return (
    <>
      <Header />
      <Panel />
      <Board boxes={boxes} setBoxes={setBoxes} />
      <History />
    </>
  )
}

export default App
