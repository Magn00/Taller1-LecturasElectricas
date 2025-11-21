import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 col-lg-6">
                    <Card 
                        title="Taller 1 - Sistema de Gestión de Lecturas Eléctricas"
                        subTitle="Empresa Sanquinta - Distribución Eléctrica"
                        className="text-center"
                    >
                        <div className="mb-4">
                            <p className="text-muted fs-5 mt-3">
                                <strong>Magno Rodríguez Cubillos</strong>
                            </p>
                        </div>
                        


                        <div className="d-flex gap-3 justify-content-center mt-4">
                            <Button 
                                label="Registrar Lectura" 
                                icon="pi pi-plus-circle"
                                severity="success" 
                                onClick={() => navigate('/registrar')}
                            />
                            <Button 
                                label="Ver Mediciones" 
                                icon="pi pi-list"
                                severity="info" 
                                onClick={() => navigate('/mediciones')}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
