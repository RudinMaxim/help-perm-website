import { Container, Logo } from '../index';
import style from './Header.module.scss';
import { NavBar } from './components/NavBar';

// TODO Сделать отобюражение для 435 px
export function Header() {
	return (
		<Container>
			<header className={style.Header}>
				<Logo />
				<NavBar />
			</header>
		</Container>
	);
}
