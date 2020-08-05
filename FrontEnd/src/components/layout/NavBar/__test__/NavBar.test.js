import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import renderer from 'react-test-renderer'
import NavBar from '../NavBar'
import ThemeContextProvider from '../../../../theme/ThemeContext'

afterEach(cleanup)

it('matches snapshot', () => {
  const tree = renderer.create(
    <ThemeContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeContextProvider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ThemeContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeContextProvider>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('hover fires toggle for tooltip for help', () => {
  const toggle = jest.fn()
  const { getByTestId } = render(
    <ThemeContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeContextProvider>)
  act(() => {
    fireEvent(getByTestId('helpNav'), new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
    }))
  })
  expect(toggle).toHaveBeenCalled()
})

it('hover fires toggle for tooltip for settings', () => {
  const toggle = jest.fn()
  const { getByTestId } = render(
    <ThemeContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeContextProvider>)
  act(() => {
    fireEvent(getByTestId('settingsNav'), new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
    }))
  })
  expect(toggle).toHaveBeenCalled()
})