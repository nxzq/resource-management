import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FilterModal from '../FilterModal'

afterEach(cleanup)

describe('Test FilterModal', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<FilterModal neededSkills={[ 'Java' ]}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FilterModal neededSkills={[ 'Java' ]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})