import { Routes, Route } from 'react-router-dom';

import LayoutAdmin from './componentes/LayoutAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdminRestaurantes from './paginas/AdminRestaurantes';
import FormRestaurante from './paginas/AdminRestaurantes/FormRestaurante';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurantes" element={<VitrineRestaurantes />} />

            <Route path="/admin" element={<LayoutAdmin />}>
                <Route path="restaurantes" element={<AdminRestaurantes />} />
                <Route path="restaurantes/:id" element={<FormRestaurante />} />
                <Route path="restaurantes/novo" element={<FormRestaurante />} />
            </Route>
        </Routes>
    );
}

export default App;
