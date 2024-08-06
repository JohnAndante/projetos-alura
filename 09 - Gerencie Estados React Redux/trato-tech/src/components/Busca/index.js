import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetarBusca, mudarBusca } from 'store/reducers/busca';
import styles from './Busca.module.scss';

const Busca = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const busca = useSelector(state => state.busca);

    useEffect(() => {
        dispatch(resetarBusca());
    }, [location.pathname, dispatch]);

    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder="O que você procura?"
                value={busca}
                onChange={e => dispatch(mudarBusca(e.target.value))}
            />
        </div>
    );
}

export default Busca;
