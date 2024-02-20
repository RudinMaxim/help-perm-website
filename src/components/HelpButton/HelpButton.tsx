import { FaShieldAlt } from 'react-icons/fa';
import { Button } from '../ui';

export function HelpButton() {
	return (
		<Button type='button' style={{ whiteSpace: 'nowrap' }}>
			Нужна помощь
			<FaShieldAlt />
		</Button>
	);
}
