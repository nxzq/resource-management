import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Profile from '../Profile'

afterEach(cleanup)

describe('Test Profile', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Route path='/profile/:id' component={Profile} />
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Route path='/profile/:id' component={Profile} />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})