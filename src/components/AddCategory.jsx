import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => { // gestionem input
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => { // gestionem submit de l'input (enter)
        event.preventDefault(); // fa que no es resetegi el navegador
        const input = inputValue.trim() // netejem el valor d'input
        if (!input) return; // si no hem introduit re no afegim
        onNewCategory(input) // executem la funció que hem passat del parent
        setInputValue(''); // resetejem value
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange} // onSubmit i onInputChange son dos funcions que van amb el event, així: (event) => onSubmit(event). target i preventDefault son propietats d'event.
            />
        </form>
    )
}
 