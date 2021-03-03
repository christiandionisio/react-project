import * as TYPE from '../types/platos'

export const fetchPlatosData = () => async (dispatch) => {

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json()
        console.log(data);
        const newData = 'hola'
        dispatch({
            type: TYPE.ADD_PLATO,
            data: newData
        })
        
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Terminó el fetch');
    }
    
}