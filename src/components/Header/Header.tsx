import React from 'react';
import { Container, Logo } from '../index';
import { NavBar } from './components/NavBar';
import { Button } from '../ui';
import style from './Header.module.scss';
import { FaShieldAlt } from 'react-icons/fa';

export function Header() {
	return (
		<Container>
			<header className={style.Header}>
				<Logo />

				<NavBar />

				<Button type='button'>
					Нужна помощь
					<FaShieldAlt />
				</Button>
			</header>
		</Container>
	);
}
