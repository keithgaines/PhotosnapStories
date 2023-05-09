import { render } from '@redwoodjs/testing/web'

import InfoSection from './InfoSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InfoSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoSection />)
    }).not.toThrow()
  })
})
