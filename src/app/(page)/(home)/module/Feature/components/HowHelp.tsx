import { howHelp } from '@/lib/constants/content';
import style from '../Feature.module.scss';

export function HowHelp() {
	return (
		<section className={style.HowHelp} id='HowHelp'>
			<div className={style.HowHelpRowe}>
				<h2>Способы получение помощи </h2>

				<HowHelpList />
			</div>
		</section>
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
			<li></li>
		</ul>
	);
}
