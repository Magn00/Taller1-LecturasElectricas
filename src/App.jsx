import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import WelcomePage from './pages/WelcomePage';
import RegistrarPage from './pages/RegistrarPage';
import MedicionesPage from './pages/MedicionesPage';

function App() {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/registrar" element={<RegistrarPage />} />
                <Route path="/mediciones" element={<MedicionesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
