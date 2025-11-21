import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

function AppNavbar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Registrar Lectura',
            icon: 'pi pi-plus',
            command: () => navigate('/registrar')
        },
        {
            label: 'Mediciones Existentes',
            icon: 'pi pi-list',
            command: () => navigate('/mediciones')
        }
    ];

    const start = <h3 className="m-0">Gestión de Lecturas Eléctricas - Sanquinta</h3>;

    return (
        <Menubar model={items} start={start} />
    );
}

export default AppNavbar;
