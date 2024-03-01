import { Container } from '@/components';
import { ButtonLink } from '@/components/ui';
import { Assistance } from '@/module';
import { FaLocationDot } from 'react-icons/fa6';
import style from './Heroes.module.scss';

export function Heroes() {
	return (
		<Container>
			<div className={style.Heroes}>
				<div className={style.Heroes__main__row}>
					<Location />
					<h1>
						Поддержка и помощь
						<br />в преодолении трудностей
					</h1>
				</div>

				<div className={style.Heroes__second__row}>
					<div className={style.Heroes__second__row_top}>
						<Assistance />
						<ButtonLink href='/help-myself'>Помочь себе</ButtonLink>
					</div>
				</div>
			</div>
		</Container>
	);
}

export function Location() {
	return (
		<div className={style.Location}>
			<FaLocationDot />
			<p>Место где помогут </p>
		</div>
	);
}
