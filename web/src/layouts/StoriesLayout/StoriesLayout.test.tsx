import { render } from '@redwoodjs/testing/web'

import StoriesLayout from './StoriesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StoriesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoriesLayout />)
    }).not.toThrow()
  })
})
