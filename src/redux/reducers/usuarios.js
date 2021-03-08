import * as TYPE from '../types/usuarios'

const initialState = {
    usuarios: {
        loading: false,
        data: null,
        error: {
            error: false,
            message: ''
        }
    }
}

export default function usuarios(state = initialState, action) {
    switch(action.type) {
        case TYPE.GET_USERS_START:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: true,
                    error: initialState.usuarios.error
                }
            }
        
        case TYPE.GET_USERS_SUCCESS:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    data: action.data
                }
            }
        
        case TYPE.GET_USERS_FAIL:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    error: action.error
                }
            }

        case TYPE.GET_USERS_FINISH:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: false
                }
            }
        
        
        // STATE OF DELETE USERS
        case TYPE.DELETE_USERS_START:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: true,
                    error: initialState.usuarios.error
                }
            }
        
        case TYPE.DELETE_USERS_SUCCESS:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    data: action.data
                }
            }
        
        case TYPE.DELETE_USERS_FAIL:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    error: action.error
                }
            }

        case TYPE.DELETE_USERS_FINISH:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: false
                }
            }
        


        // STATE OF ADD USERS
        case TYPE.ADD_USERS_START:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: true,
                    error: initialState.usuarios.error
                }
            }
        
        case TYPE.ADD_USERS_SUCCESS:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    data: action.data
                }
            }
        
        case TYPE.ADD_USERS_FAIL:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    error: action.error
                }
            }

        case TYPE.ADD_USERS_FINISH:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: false
                }
            }



        // STATE OF EDIT USERS
        case TYPE.EDIT_USERS_START:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: true,
                    error: initialState.usuarios.error
                }
            }
        
        case TYPE.EDIT_USERS_SUCCESS:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    data: action.data
                }
            }
        
        case TYPE.EDIT_USERS_FAIL:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    error: action.error
                }
            }

        case TYPE.EDIT_USERS_FINISH:
            return {
                ...state,
                usuarios: {
                    ...state.usuarios,
                    loading: false
                }
            }
        
        default:
            return state
    }
}