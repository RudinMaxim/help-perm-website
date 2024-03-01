import { Addiction } from '@/lib/constants/Addiction';
import { Card } from './index';

export function AddictionList() {
	return (
		<ul>
			{Addiction.map((el) => (
				<Card key={`AddictionList_${el.description}`} {...el} />
			))}
		</ul>
	);
}
