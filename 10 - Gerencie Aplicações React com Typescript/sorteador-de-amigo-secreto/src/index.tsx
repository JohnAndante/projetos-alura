import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaBase from './pages/PaginaBase/PaginaBase';
import './index.css';

ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<PaginaBase />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
);
