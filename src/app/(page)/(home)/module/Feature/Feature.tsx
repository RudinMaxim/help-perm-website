import { Container } from '@/components';
import style from './Feature.module.scss';
import { Solution } from './components';

export function Feature() {
	return (
		<Container>
			<div className={style.Feature}>
				<Solution />
			</div>
		</Container>
	);
}
