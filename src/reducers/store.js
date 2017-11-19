/* place to store all states*/
import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'

import { newsReducer } from './index'

const middleware = applyMiddleware( thunk )

//export instantiate of store
export default createStore( newsReducer, middleware )
