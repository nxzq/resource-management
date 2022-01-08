import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Settings from '../Settings'
import ThemeContextProvider from '../../../../contexts/theme/ThemeContext'

afterEach(cleanup)

describe('Test Settings', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <ThemeContextProvider dark={true}>
          <Settings />
        </ThemeContextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeContextProvider dark={true}>
        <BrowserRouter>
          <Settings />
        </BrowserRouter>
      </ThemeContextProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
