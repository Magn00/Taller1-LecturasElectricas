import React, { useContext, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import MedicionesContext from '../providers/context';

function MedicionesTable() {
    const { mediciones, removeMedicion, toast } = useContext(MedicionesContext);
    const [filtroTipo, setFiltroTipo] = useState('TODAS');

    const tiposMedida = [
        { label: 'Todas', value: 'TODAS' },
        { label: 'Kilowatts', value: 'Kilowatts' },
        { label: 'Watts', value: 'Watts' },
        { label: 'Temperatura', value: 'Temperatura' }
    ];

    const handleDescartar = (medicion) => {
        removeMedicion(medicion.id);
        toast.current.show({
            severity: "success",
            summary: "Lectura descartada",
            detail: "La medición ha sido eliminada",
            sticky: true
        });
    };

    const accionesTemplate = (medicion) => {
        return (
            <Button
                label="Descartar Lectura"
                severity="danger"
                size="small"
                onClick={() => handleDescartar(medicion)}
            />
        );
    };

    const valorTemplate = (medicion) => {
        return `${medicion.valor} ${medicion.simbolo}`;
    };

    const medicionesFiltradas = filtroTipo === 'TODAS'
        ? mediciones
        : mediciones.filter(m => m.tipoMedida === filtroTipo);

    const filtroHeader = (
        <div className="d-flex justify-content-between align-items-center">
            <span>Mediciones Existentes</span>
            <Dropdown
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.value)}
                options={tiposMedida}
                placeholder="Filtrar por tipo"
                style={{ width: '200px' }}
            />
        </div>
    );

    return (
        <DataTable
            value={medicionesFiltradas}
            header={filtroHeader}
            emptyMessage="No hay mediciones registradas"
            sortField="fechaCompleta"
            sortOrder={1}
            tableStyle={{ minWidth: '50rem' }}
        >
            <Column field="fecha" header="Fecha" sortable></Column>
            <Column field="hora" header="Hora" sortable></Column>
            <Column field="medidor" header="Medidor" sortable></Column>
            <Column header="Valor" body={valorTemplate} sortable sortField="valor"></Column>
            <Column header="Acciones" body={accionesTemplate}></Column>
        </DataTable>
    );
}

export default MedicionesTable;
