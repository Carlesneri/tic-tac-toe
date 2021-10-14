import getAvailableBoxes from './getAvailableBoxes'

const boxes = Array(9).fill(0)

describe('getAvailableBoxes', () => {
  beforeEach(() => {
    boxes[4] = 1
    boxes[7] = 2
  })
  test('returns the available boxes', () => {
    const expected = 7
    const result = getAvailableBoxes(boxes)
    expect(result).toHaveLength(expected)
  })
})
