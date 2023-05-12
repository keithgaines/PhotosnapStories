import { render } from '@redwoodjs/testing/web'

import Pricecard from './Pricecard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Pricecard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pricecard />)
    }).not.toThrow()
  })
})
