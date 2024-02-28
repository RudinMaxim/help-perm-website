'use client';
import { useWindowSize } from '@/lib/hook/useWindowSize';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
	useForm,
} from 'react-hook-form';
import { z } from 'zod';

export const schemaAssistance = z.object({
	name: z.string(),
	phone: z.string().min(10).max(11),
	subject: z.string(),
	message: z.string(),
});

export type FormSchemaAssistance = z.infer<typeof schemaAssistance>;

export interface IAssistance {
	toggetModal: () => void;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMobile: boolean;
	register: UseFormRegister<FormSchemaAssistance>;
	handleSubmit: UseFormHandleSubmit<FormSchemaAssistance>;
	onSubmit: (data: FormSchemaAssistance) => void;
	errors: FieldErrors<FormSchemaAssistance>;
	isSubmitting: boolean;
}

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
