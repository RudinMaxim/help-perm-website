import { Container } from '@/components';
import style from './Feature.module.scss';
import { Solution } from './components';

export function Feature() {
	return (
		<Container>
			<div className={style.Feature}>
				<Solution />

				{/* Сюда блок как получить помощь */}
				<p>
					Не откладывайте решение своих проблем на потом. Сделайте первый шаг к
					своему благополучию и счастью прямо сейчас. Мы ждем вас!
				</p>
			</div>
		</Container>
	);
}
