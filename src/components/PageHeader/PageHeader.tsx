import { Container } from '..';
import style from './PageHeader.module.scss';

interface IPageHeader {
	title: string;
	teg?: string;
	description?: string;
}

export function PageHeader({ title, teg, description }: IPageHeader) {
	return (
		<Container>
			<div className={style.PageHeader}>
				{teg && <span>{teg}</span>}

				<h1>{title}</h1>
				{description && <p>{description}</p>}
			</div>
		</Container>
	);
}
