import React, { useState } from 'react';

function Saludo(props) {
    // const nombre = 'Christian';
    const [firstNmae, setFirstName] = useState('');
    const onChangeNombre = () => {
        setFirstName('Christian');
    }

    console.log(props);

    return (
        // <div>Hola {props.nombre} {props.apellido}</div>
        <div>
            <div>Hola {firstNmae}</div>
            <button onClick={onChangeNombre}>Cambiar Nombre</button>
        </div>
    );
}

export default Saludo;