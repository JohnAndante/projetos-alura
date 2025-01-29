import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import style from './App.module.scss';
import DebugObserver from './components/DebugObserver';

function App() {

    return (
        <RecoilRoot>
            <DebugObserver />
            <Suspense fallback={<div>Carregando...</div>}>
                <div className={style.App}>
                    <div className={style.Coluna}>
                        <Card>
                            <Formulario />
                        </Card>
                        <hr />
                        <Card>
                            <ListaDeEventos />
                        </Card>
                    </div>
                    <div className={style.Coluna}>
                        <Calendario />
                    </div>
                </div>
            </Suspense>
        </RecoilRoot>
    );
}

export default App;
