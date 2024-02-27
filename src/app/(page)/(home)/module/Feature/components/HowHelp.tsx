import { howHelp } from '@/lib/constants/content';
import style from '../Feature.module.scss';

export function HowHelp() {
	return (
		<section className={style.HowHelp} id='ForMasterHowWork'>
			<div className={style.HowHelpRowe}>
				<h2>
					Способы
					<br />
					получение <br /> помощи{' '}
				</h2>

				<HowHelpList />
			</div>
		</section>
	);
}

function HowHelpList() {
	return (
		<ul>
			{howHelp.map((item, index) => (
				<li key={`HowHelpList_item`}>
					<span>{index + 1}</span>
					<p>{item};</p>
				</li>
			))}
			<li></li>
		</ul>
	);
}
