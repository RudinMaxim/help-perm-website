import { NavBar } from '.';
import style from '../Header.module.scss';

export function MobileMenu() {
	return (
		<div className={style.mobileMenu}>
			<div className={style.mobileMenuInner}>
				<NavBar />a
			</div>
		</div>
	);
}
