import React from "react"; // Cambia StrictMode por React
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./styles/mian.css";
import Inicio from "./components/Inicio/Inicio";
import { PrimerComponente } from "./components/1_PrimerComponente/PrimerComponente";
import { SegundoComponente } from "./components/2_SegundoComponente/SegundoComponente";
import { TercerComponente } from "./components/3_TercerComponente/TercerComponente";
import { CuartoComponente } from "./components/4_CuartoComponente/CuartoComponente";
import { QuintoComponente } from "./components/5_QuintoComponente/QuintoComponente";
//import UsersApp from "./UsersApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <nav>
     <NavLink to="/">Inicio</NavLink>
     <NavLink to="/PrimerComponente">Primer Componente</NavLink>
     <NavLink to="/SegundoComponente">Segundo Componente</NavLink>
     <NavLink to="/TercerComponente">Tercer Componente</NavLink>
     <NavLink to="/CuartoComponente">Cuarto Componente</NavLink>
     <NavLink to="/QuintoComponente">Quinto Componente</NavLink>
    </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/PrimerComponente" element={<PrimerComponente />} />
        <Route
          path="/SegundoComponente"
          element={
            <SegundoComponente
              titulo={
                "aca pasando la primer prop que se llamda titulo pero es un simple parrafo"
              }
              numero={25}
            />
          }
        />
        <Route path="/TercerComponente" element={<TercerComponente />} />
        <Route path="/CuartoComponente" element={<CuartoComponente />} />
        <Route path="/QuintoComponente" element={<QuintoComponente />} />
      </Routes>
      <br />
      <a href="./UsersApp">Aplicacion de usuarios</a>
    </BrowserRouter>
  </React.StrictMode>
);
