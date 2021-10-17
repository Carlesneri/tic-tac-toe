export default boxes => {
  const availableBoxIndexes = boxes.reduce((prev, curr, i) => {
    if (curr.player === 0) return [...prev, i]
    return [...prev]
  }, [])
  return availableBoxIndexes
}
