import Menu from "componentes/Menu";
import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
        </Route>

        <Route path='*' element={<h1>404</h1>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
