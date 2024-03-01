import { Difficultie } from '@/lib/constants/difficulties';
import { Card } from './index';

export function DifficultieList() {
	return (
		<ul>
			{Difficultie.map((el) => (
				<Card key={`DifficultieList_${el.description}`} {...el} />
			))}
		</ul>
	);
}
