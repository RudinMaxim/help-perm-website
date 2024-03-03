import { pagesMap } from '@/lib/constants/page';
import Link from 'next/link';
import style from '../Header.module.scss';

export function NavBar() {
	return (
		<div className={style.NavBarWrapper}>
			<nav className={style.NavBar}>
				<ul>
					{pagesMap
						.filter((el) => el.url != '/')
						.map((link) => (
							<li key={`NavBar_${link.name}`} aria-label={link.name}>
								<Link href={link.url}>{link.name}</Link>
							</li>
						))}
				</ul>
			</nav>
		</div>
	);
}
