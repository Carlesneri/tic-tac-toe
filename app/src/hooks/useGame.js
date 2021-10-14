import getAvailableBoxes from '../helpers/getAvailableBoxes'

export default () => {
  const playComputer = ({ boxes, setBoxes }) => {
    // retrieving the indexes available
    const availableBoxes = getAvailableBoxes(boxes)
    console.log({ availableBoxes })
  }

  return { playComputer }
}
