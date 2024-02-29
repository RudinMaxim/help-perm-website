import { Container } from '@/components';
import { Addiction } from '@/lib/constants/Addiction';
import { Difficultie, IDifficultie } from '@/lib/constants/difficulties';

export function Problem() {
	return (
		<Container>
			<h2>Мы поможем преодолеть зависимости</h2>
			<AddictionList />

			<h2>Мы поможем решить проблемы</h2>
			<DifficultieList />
		</Container>
	);
}

function AddictionList() {
	return (
		<ul>
			{Addiction.map((el) => (
				<Card key={`AddictionList_${el.description}`} {...el} />
			))}
		</ul>
	);
}

function DifficultieList() {
	return (
		<ul>
			{Difficultie.map((el) => (
				<Card key={`DifficultieList_${el.description}`} {...el} />
			))}
		</ul>
	);
}

function Card({ title, description, decision }: IDifficultie) {
	return (
		<li>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{decision}</p>
		</li>
	);
}
