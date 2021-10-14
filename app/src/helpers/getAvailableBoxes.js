const getAvailableBoxes = boxes => {
  const filtered = boxes.reduce((prev, curr, i) => {
    if (curr === 0) return [...prev, i]
    return prev
  }, [])
  return filtered
}

// module.exports = getAvailableBoxes
export default getAvailableBoxes
