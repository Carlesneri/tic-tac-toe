import getComputerBox from '../../helpers/getComputerBox.js'

export const getThrow = async (req, res) => {
  try {
    const { availableBoxes, boxes } = req.body
    const computerBox = getComputerBox(availableBoxes, boxes)
    res.json({ computerBox })
  } catch (error) {
    console.error(error)
    res.json({ message: 'Error playing computer' })
  }
}
