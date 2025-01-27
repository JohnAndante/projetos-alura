import { Routes, Route } from 'react-router-dom';

import LayoutAdmin from './componentes/LayoutAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import ListagemRestaurantes from './paginas/Administracao/Restaurantes/Listagem';
import FormularioRestaurantes from './paginas/Administracao/Restaurantes/Formulario';
import ListagemPratos from './paginas/Administracao/Pratos/Listagem';
import FormularioPratos from './paginas/Administracao/Pratos/Formulario';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurantes" element={<VitrineRestaurantes />} />

            <Route path="/admin" element={<LayoutAdmin />}>
                <Route path="restaurantes" element={<ListagemRestaurantes />} />
                <Route path="restaurantes/:id" element={<FormularioRestaurantes />} />
                <Route path="restaurantes/novo" element={<FormularioRestaurantes />} />

                <Route path="pratos" element={<ListagemPratos />} />
                <Route path="pratos/:id" element={<FormularioPratos />} />
                <Route path="pratos/novo" element={<FormularioPratos />} />
            </Route>

        </Routes>
    );
}

export default App;
