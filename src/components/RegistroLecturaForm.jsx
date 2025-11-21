import React, { useContext, useState } from 'react';
import { Panel } from 'primereact/panel';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import MedicionesContext from '../providers/context';
import { v4 as uuidv4 } from 'uuid';

function RegistroLecturaForm() {
    const { addMedicion, toast } = useContext(MedicionesContext);

    const [fechaHora, setFechaHora] = useState(null);
    const medidores = Array.from({ length: 10 }, (_, i) => ({ label: `Medidor ${i + 1}`, value: i + 1 }));
    const [medidor, setMedidor] = useState(null);
    const [direccion, setDireccion] = useState('');
    const [valor, setValor] = useState(null);
    const [tipoMedida, setTipoMedida] = useState('Kilowatts');

    const tiposMedida = ['Kilowatts', 'Watts', 'Temperatura'];

    const handleRegistro = () => {
        // Validaciones
        const errores = [];

        if (!fechaHora) {
            errores.push("Debe seleccionar fecha y hora");
        }

        if (!medidor) {
            errores.push("Debe seleccionar un medidor");
        }

        if (!direccion || direccion.trim() === '') {
            errores.push("Debe ingresar una dirección");
        }

        if (!valor || valor <= 0 || valor > 500) {
            errores.push("El valor debe ser mayor que 0 y menor o igual a 500");
        }

        if (!tipoMedida) {
            errores.push("Debe seleccionar un tipo de medida");
        }

        if (errores.length > 0) {
            toast.current.show({
                severity: "error",
                summary: "Errores de validación",
                detail: errores.join(", "),
                sticky: true
            });
            return;
        }

        // Formatear fecha y hora
        const dia = String(fechaHora.getDate()).padStart(2, '0');
        const mes = String(fechaHora.getMonth() + 1).padStart(2, '0');
        const anio = fechaHora.getFullYear();
        const horas = String(fechaHora.getHours()).padStart(2, '0');
        const minutos = String(fechaHora.getMinutes()).padStart(2, '0');
        
        const fechaFormateada = `${dia}-${mes}-${anio}`;
        const horaFormateada = `${horas}:${minutos}`;
        const fechaCompleta = `${fechaFormateada} ${horaFormateada}`;

        // Calcular símbolo según tipo de medida
        let simbolo = '';
        if (tipoMedida === 'Kilowatts') simbolo = 'kW';
        else if (tipoMedida === 'Watts') simbolo = 'W';
        else if (tipoMedida === 'Temperatura') simbolo = '°C';

        const nuevaMedicion = {
            id: uuidv4(),
            fecha: fechaFormateada,
            hora: horaFormateada,
            fechaCompleta: fechaCompleta,
            medidor: medidor,
            direccion: direccion,
            valor: valor,
            tipoMedida: tipoMedida,
            simbolo: simbolo
        };

        addMedicion(nuevaMedicion);

        toast.current.show({
            severity: "success",
            summary: "Medición registrada",
            detail: "La medición ha sido almacenada correctamente",
            sticky: true
        });

        // Limpiar formulario
        setFechaHora(null);
        setMedidor(null);
        setDireccion('');
        setValor(null);
        setTipoMedida('Kilowatts');
    };

    return (
        <Panel header="Registrar Lectura" className="mt-3">
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="fecha-hora">Fecha y Hora</label>
                <Calendar
                    id="fecha-hora"
                    value={fechaHora}
                    onChange={(e) => setFechaHora(e.value)}
                    showTime
                    hourFormat="24"
                    dateFormat="dd-mm-yy"
                    placeholder="dd-MM-yyyy HH:mm"
                />
            </div>

            <div className="mb-3 d-flex flex-column">
                <label htmlFor="medidor-dropdown">Medidor</label>
                <Dropdown
                    id="medidor-dropdown"
                    value={medidor}
                    onChange={(e) => setMedidor(e.value)}
                    options={medidores}
                    placeholder="Seleccione un medidor (01 a 10)"
                />
            </div>

            <div className="mb-3 d-flex flex-column">
                <label htmlFor="direccion-editor">Dirección</label>
                <Editor
                    id="direccion-editor"
                    value={direccion}
                    onTextChange={(e) => setDireccion(e.textValue)}
                    style={{ height: '150px' }}
                />
            </div>

            <div className="mb-3 d-flex flex-column">
                <label htmlFor="valor-input">Valor</label>
                <InputNumber
                    id="valor-input"
                    value={valor}
                    onValueChange={(e) => setValor(e.value)}
                    min={0}
                    max={500}
                    placeholder="Valor entre 0 y 500"
                />
            </div>

            <div className="mb-3 d-flex flex-column">
                <label>Tipo de Medida</label>
                {tiposMedida.map((tipo) => (
                    <div key={tipo} className="d-flex align-items-center mb-2">
                        <RadioButton
                            inputId={tipo}
                            name="tipoMedida"
                            value={tipo}
                            onChange={(e) => setTipoMedida(e.value)}
                            checked={tipoMedida === tipo}
                        />
                        <label htmlFor={tipo} className="ms-2">{tipo}</label>
                    </div>
                ))}
            </div>

            <div className="mt-3">
                <Button label="Registrar" severity="success" onClick={handleRegistro} />
            </div>
        </Panel>
    );
}

export default RegistroLecturaForm;
