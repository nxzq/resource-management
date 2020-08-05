import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../App'
import ThemeContextProvider from '../../theme/ThemeContext'

afterEach(cleanup)

it('matches snapshot', async () => {
  const tree = renderer.create(
    <ThemeContextProvider dark={true}>
      <App />
    </ThemeContextProvider>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ThemeContextProvider dark={true}>
      <App />
    </ThemeContextProvider>, div)
  ReactDOM.unmountComponentAtNode(div)
})