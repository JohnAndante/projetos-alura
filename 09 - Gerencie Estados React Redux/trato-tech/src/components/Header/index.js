import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

const Header = ({ titulo, descricao, imagem, className = '' }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            {titulo && !imagem &&
                <TituloSemImagem titulo={titulo} descricao={descricao} />
            }
            {titulo && imagem &&
                <TituloComImagem titulo={titulo} descricao={descricao} imagem={imagem} className={className} />
            }
        </header>
    )
}

export default Header;
