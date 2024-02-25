import { close } from '@/assets/icons';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { createPortal } from 'react-dom';
import { ButtonIcon } from '..';
import { IModal, useModal } from './Modal.hook';
import style from './Modal.module.scss';

export function Modal({
	children,
	SwitchModal,
	isMobile = false,
	title,
}: IModal) {
	const { handleClick, styles } = useModal({
		children,
		SwitchModal,
		isMobile,
		title,
	});

	return createPortal(
		<AnimatedModal>
			{/* @ts-ignore */}
			<ModalContent {...{ handleClick, styles, children, title }} />
		</AnimatedModal>,
		document.body
	);
}

function AnimatedModal({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

function ModalContent(props: {
	children: React.ReactNode;
	title?: string;
	handleClick: (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => void;
	styles: string;
}) {
	const { children, title, handleClick, styles } = props;

	return (
		<div
			className={styles}
			onClick={(event) => handleClick(event)}
			aria-modal='true'
			role='dialog'
			tabIndex={1}>
			<div className={style.ModalContent}>
				<div className={style.ModalHeader}>
					{title && <h3>{title}</h3>}

					<ButtonIcon
						icon={close}
						onClick={(event) => handleClick(event)}
						className={style.closeIcon}
					/>
				</div>
				{children}
			</div>
		</div>
	);
}
