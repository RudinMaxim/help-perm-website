'use client';

import { Modal } from '@/components/ui';
import { IAssistance } from '../Assistance';
import style from '../Assistance.module.scss';
import { AssistanceForm, AssistanceInfo } from './index';

export function AssistanceModal(props: IAssistance) {
	const { toggetModal, isMobile } = props;

	return (
		<Modal
			SwitchModal={toggetModal}
			isMobile={isMobile}
			title='Свяжись с нами и мы поможем!'>
			<div className={style.assistance__modal}>
				<AssistanceInfo />
				<AssistanceForm {...props} />
			</div>
		</Modal>
	);
}
