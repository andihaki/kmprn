import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './reducers/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
