import Menu from "componentes/Menu";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
