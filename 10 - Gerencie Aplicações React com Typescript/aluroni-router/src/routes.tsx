import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Rodape from 'components/Rodape';
import Prato from 'pages/Prato';
import NaoEncontrado from 'components/NaoEncontrado';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />

                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>

                    <Route path='prato/:prato_id' element={<Prato />} />

                    <Route path='*' element={<NaoEncontrado />} />
                </Routes>

                <Rodape />
            </Router>
        </main>
    );
}
