import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <App />
      </Router>
    </BrowserRouter>
  </StrictMode>,
)
