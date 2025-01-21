import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route áth='/cardapio' element={<Cardapio />} />
            </Routes>
        </Router>
    );
}
