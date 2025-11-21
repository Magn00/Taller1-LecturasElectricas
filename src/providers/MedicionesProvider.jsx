import React, { useRef, useState, useEffect } from 'react';
import MedicionesContext from './context';
import { createMedicion, getMediciones, deleteMedicion } from '../services/MedicionesServices';

function MedicionesProvider({ children }) {
    const toast = useRef(null);
    const [mediciones, setMediciones] = useState([]);

    // Cargar mediciones desde LocalStorage al montar
    useEffect(() => {
        setMediciones(getMediciones());
    }, []);

    const addMedicion = (medicion) => {
        createMedicion(medicion);
        setMediciones(getMediciones());
    };

    const removeMedicion = (id) => {
        deleteMedicion(id);
        setMediciones(getMediciones());
    };

    const globalState = { 
        mediciones, 
        addMedicion, 
        removeMedicion, 
        toast 
    };

    return (
        <MedicionesContext.Provider value={globalState}>
            {children}
        </MedicionesContext.Provider>
    );
}

export default MedicionesProvider;

