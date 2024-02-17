import React from 'react';
import { pagesMap } from '@/lib/constants/page';
import Link from 'next/link';
import style from '../Header.module.scss';

export function NavBar() {
	return (
		<nav className={style.NavBar}>
			<ul>
				{pagesMap.map((link) => (
					<li key={'NavBar' + link} aria-label={link.name}>
						<Link href={link.url}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
