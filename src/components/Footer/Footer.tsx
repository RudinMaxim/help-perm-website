import Link from 'next/link';
import React from 'react';
import { Container, Logo } from '..';
import style from './Footer.module.scss';

export const getCurrentYear = () => {
	const date = new Date();
	return date.getFullYear().toString();
};

export function Footer(): React.JSX.Element {
	const year = getCurrentYear();
	const start = '2023';

	return (
		<footer className={style.Footer}>
			<Container>
				<div className={style.Row}>
					<ul>
						<li>
							<Logo />
						</li>
						<li>
							<Link href={'/login'}>Вход</Link>
						</li>
						<li>
							<Link href={'/registration'}>Регистрация</Link>
						</li>
						<li>
							<Link href={'/recovery'}>Восстоновление</Link>
						</li>
					</ul>
					<nav>
						<ul>
							<li>
								<Link href={'/'}>
									<h4>Главная страница</h4>
								</Link>
							</li>
							<li>
								<Link href={'/#about'}>Поиск</Link>
							</li>
							<li>
								<Link href={'/#about'}>О нас</Link>
							</li>
						</ul>
					</nav>
					<nav>
						<ul>
							<li>
								<Link href={'/ForMaster'}>
									<h4>Мастерам</h4>
								</Link>
							</li>
							<li>
								<Link href={'/ForMaster/#ForMasterHome'}>Старт</Link>
							</li>
							<li>
								<Link href={'/ForMaster/#ForMasterOffer'}>Услуги</Link>
							</li>
							<li>
								<Link href={'/ForMaster/#ForMasterHowWork'}>Как работает</Link>
							</li>
							<li>
								<Link href={'/ForMaster/#ForMasterPrice'}>Цены</Link>
							</li>
							<li>
								<Link href={'/ForMaster/#ForMasterFAQ'}>FAQs</Link>
							</li>
						</ul>
					</nav>
					<ul>
						<li>
							<h4>Наши соц. сети</h4>
						</li>
						<li>
							<Link href='https://t.me/BeautySync'>Telegram</Link>
						</li>{' '}
						<li>
							<Link href='https://t.me/BeautySync'>Vk</Link>
						</li>
					</ul>
				</div>
				<div className={style.Row}>
					<div className={style.Copyright}>
						Copyright &copy; {year == start ? `${year}` : `${start} - ${year}`},
						BeautySync
					</div>
					<div>
						<Link href={'/Policy/Privacy'}>Privacy Policy, </Link>
						<Link href={'/Policy/Cookie'}>Cookie Policy</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
}
