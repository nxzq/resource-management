import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './app/App'
import * as serviceWorker from './utils/serviceWorker'
import ThemeContextProvider from './contexts/theme/ThemeContext'
import FilterContextProvider from './contexts/FilterContext/FilterContext'
import './contexts/theme/theme.css'

ReactDOM.render(
  <ThemeContextProvider>
    <FilterContextProvider>
    <App />
    </FilterContextProvider>
  </ThemeContextProvider>
  
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
