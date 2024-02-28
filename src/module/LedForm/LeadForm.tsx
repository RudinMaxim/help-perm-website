import { Container } from '@/components';
import { Button, Input } from '@/components/ui';
import { useLead } from './Lead.hook';
import style from './LeadForm.module.scss';

export function LeadForm() {
	const {} = useLead();

	return (
		<section className={style.lead}>
			<Container>
				<div className={style.lead_inner}>
					<div>
						<h2>Хочешь помочь?</h2>
						<p>Заполни форму и начни помогать людям!</p>
					</div>

					<form className={style.lead_form}>
						<Input label='Номер телефона' type='tel' />
						<Input label='Почта' optional type='email' />
						<Button>Отправить</Button>
					</form>
				</div>
			</Container>
		</section>
	);
}
