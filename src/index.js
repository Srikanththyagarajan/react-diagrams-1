import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import getConfiguredStore from './configureStore'
// load global scss
import 'assets/scss/style.scss'
// extend bluebird promise in dev mode
Promise.config({
  longStackTraces: process.env.NODE_ENV === 'development',
  warnings: process.env.NODE_ENV === 'development',
})
const store = getConfiguredStore()
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)