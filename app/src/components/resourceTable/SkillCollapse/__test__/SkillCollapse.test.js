import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import SkillCollapse from '../SkillCollapse'

afterEach(cleanup)

describe('Test SkillCollapse', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<SkillCollapse />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SkillCollapse />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
