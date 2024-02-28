'use client';
import { useAssistance } from './Assistance.hook';
import { AssistanceButton, AssistanceModal } from './components';

export function Assistance() {
	const props = useAssistance();

	return (
		<>
			<AssistanceButton {...props} />

			{props.isOpen && <AssistanceModal {...props} />}
		</>
	);
}
