import '@testing-library/jest-dom'
import {render, findByText} from '@testing-library/react'
import Box from './Box'

describe('box', () => {
  test('when appears shows 0', () => {
    const component = render(<Box value='0' position='1' />)
    expect(findByText(component), '0').toBeVisible()
    
  })
})