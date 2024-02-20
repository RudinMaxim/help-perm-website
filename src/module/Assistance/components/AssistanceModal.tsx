import { Modal } from '@/components/ui';
import { IAssistance } from '../Assistance.hook';
import { AssistanceForm } from './index';

export function AssistanceModal(props: IAssistance) {
	const { toggetModal, isMobile } = props;

	return (
		<Modal SwitchModal={toggetModal} isMobile={isMobile} title='Нужна помощь'>
			<AssistanceForm {...props} />
		</Modal>
	);
}
