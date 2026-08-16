import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppComponent from './App.jsx'
import './App.css';
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter> 
  </StrictMode>,
)
