import axiosIns from "../utils/helpers";

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
  export const getAnimal = (token) => {
    var animal=[];
    axiosIns.get("/animalcount/").then((res) => {
      Object.entries(res.data).forEach(([k,v]) => {
        animal.push({
          'name':k,
          'count':v
        })
    })
    })
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