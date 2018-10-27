var initialState = {}

export default function UserReducer(state = initialState, action = {}) {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
        return action
      break;
      case 'LOGIN_FAILED':
        return action
  }
  return state
}
