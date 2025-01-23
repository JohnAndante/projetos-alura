import { Outlet } from 'react-router-dom';

import Cabecalho from 'components/Cabecalho';

import temaStyles from '../../styles/Tema.module.scss';

export default function PaginaPadrao() {
    return (
        <>
            <Cabecalho />

            <div className={temaStyles.container}>
                <Outlet />
            </div>
        </>
    );
}
