import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Redux/index.js'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store
