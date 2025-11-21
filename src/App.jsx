import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import MedicionesPage from './pages/MedicionesPage';

function App() {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mediciones" element={<MedicionesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
