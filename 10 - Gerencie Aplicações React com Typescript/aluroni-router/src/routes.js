import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<h1>Sobre</h1>} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}
