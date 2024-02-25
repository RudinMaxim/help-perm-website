import { SocialMedia, Сontacts } from '@/components';
import style from '../Assistance.module.scss';

export function AssistanceInfo(): React.JSX.Element {
	return (
		<div className={style.assistance__info}>
			<h3>Наши контакты</h3>
			<Сontacts />

			<SocialMedia />
		</div>
	);
}
