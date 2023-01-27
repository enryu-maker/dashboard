

export const Init = () => {
    return async dispatch => {
      const token = localStorage.getItem("access");
        dispatch({
          type: 'LOGIN',
          payload: token,
        })
      // }
    }
  }
  
  export const Login_Function = (token) => {
    
    localStorage.setItem("access", token);
    return async dispatch => {
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
  export const getAnimals = (animal) => {
    return async dispatch => {
      dispatch({
        type: 'ANIMAL',
        payload: animal,
      })
    }    
  }

  export const Logout = () => {
    return async dispatch => {
      localStorage.clear()
      dispatch({
        type: 'LOGOUT',
        payload:null
      })
    }
  }