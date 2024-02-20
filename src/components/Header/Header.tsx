import { FaLocationDot } from 'react-icons/fa6';
import { Container, Logo } from '../index';
import style from './Header.module.scss';
import { NavBar } from './components/NavBar';

// TODO Сделать отобюражение для 435 px
export function Header() {
	return (
		<Container>
			<header className={style.Header}>
				<div className={style.HeaderContent}>
					<Logo />
					<Location />
				</div>

				<NavBar />
			</header>
		</Container>
	);
}
function Location() {
	return (
		<div className={style.Location}>
			<FaLocationDot />
			<p>Пермский край</p>
		</div>
	);
}
