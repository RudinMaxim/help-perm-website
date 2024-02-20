import { useWindowSize } from '@/lib/hook/useWindowSize';
import { useEffect, useState } from 'react';

export interface IAssistance {
	toggetModal: () => void;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMobile: boolean;
}

export const useAssistance = (): IAssistance => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const { windowSize } = useWindowSize();

	// =========================================================================

	const toggetModal = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		if (windowSize.width) {
			if (windowSize.width <= 1024) {
				setIsMobile(true);
			}
			if (windowSize.width >= 1024) {
				setIsMobile(false);
			}
		}
	}, [windowSize.width]);

	return {
		toggetModal,
		isOpen,
		setIsOpen,
		isMobile,
	};
};
