import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
	RiShoppingCartLine,
	RiShoppingCartFill
} from "react-icons/ri";
import classNames from "classnames";
import Busca from "components/Busca";
import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const iconProps = {
	color: 'white',
	size: 24
}

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<nav className={styles.nav}>
			<Logo className={styles.logo} onClick={() => navigate('/')} />

			<div className={styles.links}>
				<div>
					<a
						href="/"
						className={classNames(styles.link, {
							[styles.selected]: window.location.pathname === "/",
						})}>
						Página Inicial
					</a>
				</div>
			</div>

			<div className={styles.busca}>
				<Busca />
			</div>

			<div className={styles.icones}>
				<Link to="/carrinho" className={styles.icone}>
					{location.pathname === "/carrinho"
						? <RiShoppingCartFill {...iconProps} />
						: <RiShoppingCartLine {...iconProps} />
					}
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
