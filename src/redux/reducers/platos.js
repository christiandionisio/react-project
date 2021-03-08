import * as TYPE from '../types/platos'

const initialState = {
    listPlatos: {
        loading: false,
        data: null,
        error: {
            error: false,
            message: ''
        }
    }
}

export default function platos(state = initialState, action) {
    switch(action.type) {
        case TYPE.GET_PLATOS_START:
            return {
                ...state,
                listPlatos: {
                    ...state.listPlatos,
                    loading: true,
                    error: initialState.listPlatos.error
                }
            }
        
        case TYPE.GET_PLATOS_SUCCESS:
            return {
                ...state,
                listPlatos: {
                    ...state.listPlatos,
                    data: action.data
                }
            }
        
        case TYPE.GET_PLATOS_FAIL:
            return {
                ...state,
                listPlatos: {
                    ...state.listPlatos,
                    error: action.error
                }
            }

        case TYPE.GET_PLATOS_FINISH:
            return {
                ...state,
                listPlatos: {
                    ...state.listPlatos,
                    loading: false
                }
            }
        
        default:
            return state
    }
}