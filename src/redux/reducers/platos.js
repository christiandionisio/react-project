import * as TYPE from '../types/platos'

const initialState = {
    data: []
}

export default function platos(state = initialState, action) {
    switch(action.type) {
        case TYPE.ADD_PLATO:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state
    }

    return state;
}