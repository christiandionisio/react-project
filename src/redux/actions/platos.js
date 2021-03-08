import * as TYPE from '../types/platos'
import Cookies from 'js-cookie'
import baseApi from '../../api/baseApi'
import {ENDPOINT_PLATOS} from '../../utils/endpoints'

export const fetchPlatosData = () => async (dispatch) => {

    try {
        dispatch({ type: TYPE.GET_PLATOS_START })
        const request = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        }
        const response = await baseApi().get(ENDPOINT_PLATOS)
        console.log(response);
        dispatch({
            type: TYPE.GET_PLATOS_SUCCESS,
            data: response.data
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: TYPE.GET_PLATOS_FAIL,
            error: {
                error: true,
                message: 'Ocurrió un error al obtener platos'
            }
        })
    } finally {
        console.log('Terminó el fetch');
        dispatch({ type: TYPE.GET_PLATOS_FINISH })
    }
    
}