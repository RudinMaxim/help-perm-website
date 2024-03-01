import { Container } from '@/components';
import { howHelp } from '@/lib/constants/content';
import { Assistance } from '@/module';
import style from './HowHelp.module.scss';

export function HowHelp() {
	return (
		<Container>
			<section className={style.HowHelp} id='HowHelp'>
				<div className={style.HowHelpRowe}>
					<h2>Способы получение помощи </h2>

					<HowHelpList />
				</div>
			</section>
		</Container>
	);
}

function HowHelpList() {
	return (
		<ul className={style.HowHelpList}>
			{howHelp.map((item, index) => (
				<li key={`HowHelpList_${item}`}>
					<span>{index + 1}</span>
					<p>{item};</p>
				</li>
			))}
			<Assistance />
		</ul>
	);
}
