var initialState = {
	user: {
		isLoggedIn: false,
		error: null
	}
}

export default function UserReducer(state = initialState, action = {}) {
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
