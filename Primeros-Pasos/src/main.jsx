import { BrowserRouter, Routes , Route, NavLink } from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from "./components/PrimerComponente";
import Inicio from "./components/Inicio";
import './styles.css' 

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/PrimerComponente">Primer Componente</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/PrimerComponenete" element={<PrimerComponente />} />
      </Routes>
    </BrowserRouter>

   
  </StrictMode>
)
