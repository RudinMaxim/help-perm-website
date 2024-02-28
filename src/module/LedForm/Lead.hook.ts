import { z } from 'zod';

export const schemaLead = z.object({
	phone: z.string().min(10).max(11),
	email: z.string().email(),
});

export type FormSchemaLead = z.infer<typeof schemaLead>;

export const useLead = () => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors, isSubmitting },
	// } = useForm<FormSchemaLead>({
	// 	resolver: zodResolver(schemaLead),
	// 	mode: 'onBlur',
	// });

	// const onSubmit = (data: FormSchemaLead) => {};
	// register, handleSubmit, onSubmit, errors, isSubmitting
	return {};
};
