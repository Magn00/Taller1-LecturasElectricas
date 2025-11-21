import React, { useContext } from 'react';
import { Toast } from 'primereact/toast';
import MedicionesTable from '../components/MedicionesTable';
import MedicionesContext from '../providers/context';

function MedicionesPage() {
    const { toast } = useContext(MedicionesContext);

    return (
        <>
            <Toast ref={toast} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <MedicionesTable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MedicionesPage;
