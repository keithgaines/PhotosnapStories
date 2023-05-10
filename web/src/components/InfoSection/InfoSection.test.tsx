import { render } from '@redwoodjs/testing/web'

import { InfoSectionHome, InfoSectionFeatures } from './InfoSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InfoSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoSectionHome />)
    }).not.toThrow()
  })
})

describe('InfoSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoSectionFeatures />)
    }).not.toThrow()
  })
})
