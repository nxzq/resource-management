import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ResumeModal from '../ResumeModal'

afterEach(cleanup)

describe('Test ResumeModal', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ResumeModal />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ResumeModal />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
