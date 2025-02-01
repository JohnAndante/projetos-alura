import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaBase from './pages/PaginaBase/PaginaBase';
import './index.css';
import Sorteio from './pages/Sorteio/Sorteio';
import Cabecalho from './componentes/Cabecalho';

ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <Cabecalho />
                <Routes>
                    <Route path="/" element={<PaginaBase />} />
                    <Route path="/sorteio" element={<Sorteio />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
);
