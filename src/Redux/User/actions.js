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
        dispatch({
        	type: 'LOGIN_FAILED',
        	payload: {
        		error: 'Invalid Credentials'
        	}
        })
    } else {
        const responseBody = await response.json();
        if(responseBody.user) {
            dispatch({
            	type: 'LOGIN_SUCCESS',
            	payload: responseBody.user
            })
        } else if(responseBody.message) {
            dispatch({
            	type: 'LOGIN_SUCCESS',
            	payload: {
            		error: responseBody.message ? responseBody.message : null
            	}
            })
        }
    }
  } catch (error) {
    dispatch({
    	type: 'LOGIN_SUCCESS',
    	payload: {
    		error: 'Oops! Something went wrong.'
    	}
    })
  }
}
