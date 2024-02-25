'use client';
import type {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { z } from 'zod';
import { useAssistance } from './Assistance.hook';
import { AssistanceButton, AssistanceModal } from './components';

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

export function Assistance() {
	const props = useAssistance();

	return (
		<>
			<AssistanceButton {...props} />

			{props.isOpen && <AssistanceModal {...props} />}
		</>
	);
}
