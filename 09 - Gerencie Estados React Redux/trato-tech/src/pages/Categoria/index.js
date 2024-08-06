import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Header from 'components/Header';
import Button from 'components/Button';
import Item from 'components/Item';
import styles from './Categoria.module.scss';

const Categoria = () => {
    const navigate = useNavigate();
    const { nomeCategoria } = useParams();
    const { categoria, itens } = useSelector(state => {
        const regexp = new RegExp(state.busca, 'i');

        return {
            categoria: state.categorias.find(categoria => categoria.id === nomeCategoria) || {},
            itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp))
        }
    })

    return (
        <div>
            <Header
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            >
                <Button onClick={() => navigate(`/anuncie/${categoria.nome}`)} className={styles['anuncie-button']}>
                    Quero Anunciar!
                </Button>
            </Header>

            <div className={styles.itens}>
                {itens?.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Categoria;
