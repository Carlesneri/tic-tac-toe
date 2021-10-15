import getPlayerRegExp from './getPlayerRegExp'
import getPositions from './getPositions'

export default boxes => {
  const joinedBoxes = boxes.join('')
  const player1RegExp = getPlayerRegExp(1)
  const player2RegExp = getPlayerRegExp(2)
  const matchPlayer1 = joinedBoxes.match(player1RegExp)
  const matchPlayer2 = joinedBoxes.match(player2RegExp)

  if (matchPlayer1) {
    const positions = getPositions(matchPlayer1.slice(1, 9))
    return { winner: 1, positions }
  }

  if (matchPlayer2) {
    const positions = getPositions(matchPlayer2.slice(1, 9))
    return { winner: 2, positions }
  }

  return null
}
