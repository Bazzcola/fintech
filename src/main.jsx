import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FinTechProvider } from './context/Context'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinTechProvider>
      <App />
    </FinTechProvider>
  </StrictMode>,
)
