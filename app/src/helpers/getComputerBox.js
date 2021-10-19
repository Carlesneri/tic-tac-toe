import findWinner from '../helpers/findWinner'

export default (availableBoxes, boxes) => {
  const winnerBox = getWinnerBox(availableBoxes, boxes)
  if (winnerBox) return winnerBox
  const availableBox = Math.floor(Math.random() * availableBoxes.length)
  return availableBoxes[availableBox]
}

const getWinnerBox = (availableBoxes, boxes) => {
  for (const availableBox of availableBoxes) {
    const chance = [...boxes]
    chance[availableBox] = { player: 2 }
    if (findWinner(chance)) {
      return availableBox
    }
  }
  for (const availableBox of availableBoxes) {
    const chance = [...boxes]
    chance[availableBox] = { player: 1 }
    if (findWinner(chance)) {
      return availableBox
    }
  }
  return null
}
