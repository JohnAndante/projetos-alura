import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim";
import Menu from "./paginas/componentes/menu";

function App() {
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

export default App;
