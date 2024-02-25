import { Button, Input, Textarea } from '@/components/ui';
import type { IAssistance } from '../Assistance';
import style from '../Assistance.module.scss';

export function AssistanceForm(props: IAssistance) {
	const { register, handleSubmit, onSubmit, errors, isSubmitting } = props;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.assistance__form}>
			<Input
				id='nameAssistance'
				label='Имя'
				register={register('name')}
				optional
				autoFocus
				error={errors.name?.message}
			/>

			<Input
				id='telAssistance'
				label='Телефон'
				type='tel'
				register={register('phone')}
				error={errors.phone?.message}
			/>

			<Textarea
				id='messageAssistance'
				label='Сообщение'
				register={register('message')}
				error={errors.message?.message}
			/>

			<Button type='submit' disabled={isSubmitting}>
				Отправить
			</Button>
		</form>
	);
}
