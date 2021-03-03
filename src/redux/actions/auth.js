import axios from 'axios'
import * as TYPE from '../types/auth'
import Cookies from 'js-cookie'

const API_URL = process.env.REACT_APP_URL_API;

export const doLogin = ({username, password}) => async (dispatch) => {

  dispatch({
    type: TYPE.SET_AUTHENTICATED_START
  })

  try {
    const payload = {
      username,
      password
    }
    const response = await axios.post(`${API_URL}/login`, payload)
    console.log(response)
    dispatch({
      type: TYPE.SET_AUTHENTICATED_SUCCESS,
      data: true
    })

    const expiration = new Date(response.data.expiracion)
    Cookies.set('token', response.data.token, {expires: expiration})

  } catch (error) {
    dispatch({
      type: TYPE.SET_AUTHENTICATED_FAIL,
      error: {
        error: true,
        message: 'Ocurrió un error al realizar el login'
      }
    })
  } finally {
    dispatch({
      type: TYPE.SET_AUTHENTICATED_FINISH
    })
  }
}