'use client';
import { FaShieldAlt } from 'react-icons/fa';
import { Button } from '../../../components/ui';
import { IAssistance } from '../Assistance.hook';

export function AssistanceButton(props: IAssistance) {
	const { toggetModal } = props;

	return (
		<Button
			type='button'
			style={{ whiteSpace: 'nowrap' }}
			onClick={toggetModal}>
			Нужна помощь
			<FaShieldAlt />
		</Button>
	);
}
