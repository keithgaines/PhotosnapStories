import { render } from '@redwoodjs/testing/web'

import StoriesIntro from './StoriesIntro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StoriesIntro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoriesIntro />)
    }).not.toThrow()
  })
})
