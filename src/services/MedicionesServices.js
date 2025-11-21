const STORAGE_KEY = "mediciones_electricas";

export const createMedicion = (medicion) => {
    const mediciones = getMediciones();
    mediciones.push(medicion);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mediciones));
};

export const getMediciones = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const deleteMedicion = (id) => {
    const mediciones = getMediciones();
    const filtered = mediciones.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const deleteAllMediciones = () => {
    localStorage.removeItem(STORAGE_KEY);
};
