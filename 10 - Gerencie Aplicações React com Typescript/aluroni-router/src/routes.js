import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Rodape from 'components/Rodape';
import NaoEncontrado from 'components/NaoEncontrado';
import Menu from 'components/Menu';

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

                    <Route path='*' element={<NaoEncontrado />} />
                </Routes>

                <Rodape />
            </Router>
        </main>
    );
}
