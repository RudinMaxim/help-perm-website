import { useEffect } from 'react';
import style from './Modal.module.scss';

export interface IModal {
	children: React.ReactNode;
	SwitchModal: () => void;
	isMobile: boolean;
	title?: string;
}
export const useModal = (props: IModal) => {
	const { SwitchModal, isMobile, title } = props;

	const styles = isMobile ? style.ModalMobile : style.ModalDesktop;

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			SwitchModal();
		}
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return {
		handleClick,
		styles,
	};
};
