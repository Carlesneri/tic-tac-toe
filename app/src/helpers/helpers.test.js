import findWinner from './findWinner'
import getAvailableBoxes from './getAvailableBoxes'

let boxes

describe('getAvailableBoxes', () => {
  beforeEach(() => {
    boxes = Array(9).fill(0)
  })
  test('returns the available boxes', () => {
    boxes[4] = 1
    boxes[7] = 2
    const expected = 7
    const result = getAvailableBoxes(boxes)
    expect(result).toHaveLength(expected)
  })
})

describe('findWinner', () => {
  beforeEach(() => {
    boxes = Array(9).fill(0)
  })
  test('findWinner returns null initailly', () => {
    const winner = findWinner(boxes)
    const expected = null
    expect(winner).toBe(expected)
  })
  test('findWinner returns winner 1 when a correct combination', () => {
    const tester = [2, 5, 8]
    tester.forEach(num => {
      boxes[num] = 1
    })
    const { winner, positions } = findWinner(boxes)
    const expected = 1
    expect(winner).toBe(expected)
    expect(positions).toStrictEqual(tester)
  })
  test('findWinner returns winner 2 when a correct combination', () => {
    const tester = [6, 7, 8]
    tester.forEach(num => {
      boxes[num] = 2
    })
    const { winner, positions } = findWinner(boxes)
    const expected = 2
    expect(winner).toBe(expected)
    expect(positions).toStrictEqual(tester)
  })
})
