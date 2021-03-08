import baseApi from "../../api/baseApi"
import {ENDPOINT_USERS} from '../../utils/endpoints'
import * as TYPE from '../types/usuarios'

export const getUsers = () => async (dispatch) => {
    
    dispatch({ type: TYPE.GET_USERS_START })
    try {
        const response = await baseApi().get(ENDPOINT_USERS)
        dispatch({
            type: TYPE.GET_USERS_SUCCESS,
            data:response.data
        })
    } catch (error) {
        dispatch({
            type: TYPE.GET_USERS_FAIL,
            error: {
                error: true,
                message: 'Error al obtener usuarios'
            }
        })
    } finally {
        dispatch({ type: TYPE.GET_USERS_FINISH })
    }
}

export const deleteUsers = (idUser, stateClient) => async (dispatch) => {

    const arrayClientList = stateClient.usuarios.data
    
    dispatch({ type: TYPE.DELETE_USERS_START })
    try {
        const endPointDeleteUser = `${ENDPOINT_USERS}/${idUser}`
        const response = await baseApi().delete(endPointDeleteUser)

        const newData = arrayClientList.filter((usuario) => usuario.id !== idUser)
        dispatch({
            type: TYPE.DELETE_USERS_SUCCESS,
            data: newData
        })
    } catch (error) {
        dispatch({
            type: TYPE.DELETE_USERS_FAIL,
            error: {
                error: true,
                message: 'Error al eliminar usuario'
            }
        })
    } finally {
        dispatch({ type: TYPE.DELETE_USERS_FINISH })
    }
}

export const addNewUser = (formData, stateClient) => async (dispatch) => {
    const arrayClientList = stateClient.usuarios.data

    dispatch({type: TYPE.ADD_USERS_START})
    try {
        const payload = formData
        const response = await baseApi().post(ENDPOINT_USERS, payload)
        const newData = [...arrayClientList, response.data ]
        dispatch({
            type: TYPE.ADD_USERS_SUCCESS,
            data: newData
        })
    } catch (error) {
        dispatch({
            type: TYPE.ADD_USERS_FAIL,
            error: {
                error: true,
                message: 'Error al agregar usuario'
            }
        })
    } finally {
        dispatch({ type: TYPE.ADD_USERS_FINISH })
    }
}

export const editUser = (formData, stateClient) => async (dispatch) => {
    const arrayClientList = stateClient.usuarios.data

    dispatch({type: TYPE.EDIT_USERS_START})
    try {
        const payload = formData
        const endPoinUpdateUser = `${ENDPOINT_USERS}/${formData.id}`
        const response = await baseApi().put(endPoinUpdateUser, payload)
        const index = arrayClientList.findIndex((user) => user.id === formData.id)
        const newData = [...arrayClientList]
        newData[index] = formData
        dispatch({
            type: TYPE.EDIT_USERS_SUCCESS,
            data: newData
        })
    } catch (error) {
        dispatch({
            type: TYPE.EDIT_USERS_FAIL,
            error: {
                error: true,
                message: 'Error al editar usuario'
            }
        })
    } finally {
        dispatch({ type: TYPE.EDIT_USERS_FINISH })
    }
}