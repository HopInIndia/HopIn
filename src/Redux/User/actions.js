export const loginSuccess = infoObj => ({
  'type': 'LOGIN_SUCCESS',
  'isLoggedIn': true,
  infoObj
});

export const loginFailed = message => ({
    'type': 'LOGIN_FAILED',
    'isLoggedIn': false,
    message
});

export const userInfo = info => async dispatch => {
  try {
    const response = await fetch('http://10.0.2.2:9000/oauth/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 3eIx0mgR6zXTRp8Eorz1UoWpF3ua4Q1h'
          },
          body: JSON.stringify({
              "phone": info.phone,
              "password": info.password
          })
    });

    if(response.status == 401) {
        dispatch(loginFailed("Invalid Credentials"))
    } else {
        const responseBody = await response.json();
        if(responseBody.user) {
            dispatch(loginSuccess(responseBody.user));
        } else if(responseBody.message) {
            dispatch(loginFailed(responseBody.message))
        }
    }
  } catch (error) {
    console.error(error);
  }
}
