import { Routes, Route, Navigate} from "react-router-dom";
import { NavBar } from "./routes/components/NavBar";
import {HomeScreen} from "./routes/HomeScreen" 
import {ContactScreen} from "./routes/ContactScreen" 
import {AboutScreen} from "./routes/AboutScreen" 
import {UsuarioProvider} from "./routes/context/UsuarioProvider"
export const App = () => {
  return (
    <UsuarioProvider>
     <NavBar></NavBar>
     <Routes>
        <Route path='/' element={<HomeScreen></HomeScreen>} ></Route>
        <Route path='/about' element={<AboutScreen></AboutScreen>} ></Route>
        <Route path='/contact' element={<ContactScreen></ContactScreen>} ></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}  ></Route>

     </Routes>
    </UsuarioProvider>
  );
};
