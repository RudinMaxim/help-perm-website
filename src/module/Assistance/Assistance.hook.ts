import { useWindowSize } from '@/lib/hook/useWindowSize';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	FormSchemaAssistance,
	IAssistance,
	schemaAssistance,
} from './Assistance';

export const useAssistance = (): IAssistance => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormSchemaAssistance>({
		resolver: zodResolver(schemaAssistance),
		mode: 'onBlur',
	});

	const { windowSize } = useWindowSize();

	// =========================================================================

	const onSubmit = (data: FormSchemaAssistance) => {};

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
		register,
		handleSubmit,
		onSubmit,
		errors,
		isSubmitting,
	};
};
