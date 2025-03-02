import { Outlet } from 'react-router-dom';

import Cabecalho from 'components/Cabecalho';

import temaStyles from '../../styles/Tema.module.scss';

export default function PaginaPadrao({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <Cabecalho />

            <div className={temaStyles.container}>
                <Outlet />
                {children}
            </div>
        </>
    );
}
