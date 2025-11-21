import React, { useContext } from 'react';
import { Toast } from 'primereact/toast';
import RegistroLecturaForm from '../components/RegistroLecturaForm';
import MedicionesContext from '../providers/context';

function RegistrarPage() {
    const { toast } = useContext(MedicionesContext);

    return (
        <>
            <Toast ref={toast} />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <RegistroLecturaForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrarPage;
