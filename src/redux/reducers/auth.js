import * as TYPE from '../types/auth'
import Cookies from 'js-cookie'

const hasToken = Cookies.get('token')

const initialState = {
    authenticated: {
        loading: false,
        data: hasToken,
        error: {
            error: false,
            message: ''
        }
    }
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case TYPE.SET_AUTHENTICATED_START:
            return {
                ...state,
                authenticated: {
                    ...state.authenticated,
                    loading: true,
                    error: initialState.authenticated.error
                }
            }
        
        case TYPE.SET_AUTHENTICATED_SUCCESS:
            return {
                ...state,
                authenticated: {
                    ...state.authenticated,
                    data: action.data
                }
            }
        
        case TYPE.SET_AUTHENTICATED_FAIL:
            return {
                ...state,
                authenticated: {
                    ...state.authenticated,
                    error: action.error
                }
            }

        case TYPE.SET_AUTHENTICATED_FINISH:
            return {
                ...state,
                authenticated: {
                    ...state.authenticated,
                    loading: false
                }
            }
        
        default:
            return state
    }
}