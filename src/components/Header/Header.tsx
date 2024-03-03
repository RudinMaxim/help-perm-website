import { Assistance } from '@/module';
import { Container, Logo } from '../index';
import style from './Header.module.scss';
import { NavBar } from './components';

export function Header() {
	return (
		<Container>
			<header className={style.HeaderWrapper}>
				<div className={style.Header}>
					<div className={style.HeaderContent}>
						<Logo />
						<span className={style.HeaderContentBar}>|</span>
						<div className={style.NavMain}>
							<NavBar />
						</div>
					</div>

					<Assistance />
				</div>
				<div className={style.NavSecond}>
					<NavBar />
				</div>
			</header>
		</Container>
	);
}
