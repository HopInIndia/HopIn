import { applyMiddleware, createStore } from 'redux'
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk'
import reducer from './Redux/index.js'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
export default store
