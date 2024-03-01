import { Container } from '@/components';
import style from './Problem.module.scss';
import { AddictionList, DifficultieList } from './components';

export function Problem() {
	return (
		<Container>
			<section className={style.Problem}>
				<h2>Мы поможем преодолеть зависимости</h2>
				<AddictionList />

				<h2>Мы поможем решить проблемы</h2>
				<DifficultieList />
			</section>
		</Container>
	);
}
