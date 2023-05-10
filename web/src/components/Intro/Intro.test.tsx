import { render } from '@redwoodjs/testing/web'

import Intro from './Intro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Intro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Intro />)
    }).not.toThrow()
  })
})
