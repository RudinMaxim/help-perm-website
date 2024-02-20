import Link from 'next/link';
import style from './Logo.module.scss';

export function Logo() {
	return (
		<Link href={'/'} aria-label='Помощь Пермь' className={style.Logo}>
			Помощь
		</Link>
	);
}
