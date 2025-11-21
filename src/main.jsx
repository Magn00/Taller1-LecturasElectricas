import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api'
import MedicionesProvider from './providers/MedicionesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <MedicionesProvider>
        <App />
      </MedicionesProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
