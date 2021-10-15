// All position to win
const POSITIONS = {
  0: [0, 1, 2],
  1: [3, 4, 5],
  2: [6, 7, 8],
  3: [0, 3, 6],
  4: [1, 4, 7],
  5: [2, 5, 8],
  6: [0, 4, 8],
  7: [2, 4, 6]
}

// Return the positions that wins
export default matches => {
  const positions = []
  // Getting the indexes of the matches
  const reducedMatches = matches.reduce((prev, curr, i) => {
    if (curr) {
      return [...prev, i]
    }
    return prev
  }, [])
  // Filling array positions with the winner positions
  reducedMatches.forEach(match => {
    positions.push(...POSITIONS[match])
  })
  // console.log({ positions })
  return positions
}
