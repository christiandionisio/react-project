import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout'
import * as TYPE from '../../redux/types/platos'
import * as platosActions from '../../redux/actions/platos'
import Button from '@material-ui/core/Button';

function Platos() {
    const statePlatos = useSelector( (state) => state.platos)
    const dispatch = useDispatch()

    const getDataFromAPI = () => {
        const plato = 'Arroz con pollo'
        dispatch(platosActions.fetchPlatosData())
    }

    console.log(statePlatos);
    return (
        <Layout>
            Página de Platos
            <Button onClick={getDataFromAPI} variant="contained" color="primary">
                Primary
            </Button>
        </Layout>
    )
}

export default Platos