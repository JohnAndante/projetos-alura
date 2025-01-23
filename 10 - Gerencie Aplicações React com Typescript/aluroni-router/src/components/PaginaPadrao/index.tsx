import Cabecalho from 'components/Cabecalho';
import Menu from 'components/Menu';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
    return (
        <>
            <Menu />
            <Cabecalho />
            <Outlet />
        </>
    );
}
