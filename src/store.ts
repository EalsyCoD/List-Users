import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState } from './types'

import userReducer from './ducks/reducers/UserReducers'

const reducer = combineReducers<RootState>({
  users: userReducer,
  
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store