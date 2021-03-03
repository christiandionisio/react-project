const initialState = {
    nombreUsuario: 'Christian Dionisio'
}

export default function usuarios(state = initialState, action) {
    switch(action.type) {
        case 'MY_ACTION_TYPE':
            return action.payload
    }

    return state;
}