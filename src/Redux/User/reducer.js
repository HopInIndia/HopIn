import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

var initialState = {
	user: {
		isLoggedIn: false,
		error: null
	}
}

function UserReducer(state = initialState, action = {}) {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
        	...state,
        	user: {
        		...action.payload,
        		error: null,
        		isLoggedIn: true,
        	}
        }
      break;
      case 'LOGIN_FAILED':
        return {
        	...state,
        	user: {
        		...action.payload,
        		isLoggedIn: false,
        	}
        }
       break;
  }
  return state
}

const persistConfig = {
    key: 'user',
    storage: storage
}
export default persistReducer(persistConfig, UserReducer);
