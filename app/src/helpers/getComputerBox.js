export default availableBoxes => {
  const availableBox = Math.floor(Math.random() * availableBoxes.length)
  return availableBoxes[availableBox]
}
