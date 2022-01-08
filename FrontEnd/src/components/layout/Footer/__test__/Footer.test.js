import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'

afterEach(cleanup)

describe('Test Footer', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
