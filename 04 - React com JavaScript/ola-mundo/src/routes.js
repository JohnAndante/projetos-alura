import Menu from "componentes/Menu";
import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import Inicio from "paginas/Inicio";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import SobreMim from "paginas/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
        </Route>

        <Route path='posts/:id/*' element={<Post />} />
        <Route path='*' element={<NaoEncontrada />} />

      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
