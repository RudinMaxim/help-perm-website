import { camera } from '@/assets/icons';
import { FEATURE_PAGE_CONTENT, IFEATURE_PAGE } from '@/lib/constants/content';
import Image from 'next/image';
import style from '../Feature.module.scss';

export function Solution() {
	return (
		<section className={style.solution}>
			<ul>
				{FEATURE_PAGE_CONTENT.map((content) => (
					<SolutionBlock key={`Solution_${content.title}`} {...content} />
				))}
			</ul>

			<p className={style.solution__final}>
				Не откладывайте решение своих проблем на потом. Сделайте первый шаг к
				своему благополучию и счастью прямо сейчас.
				<br />
				<span>Мы ждем вас!</span>
			</p>
		</section>
	);
}
function SolutionBlock(props: IFEATURE_PAGE) {
	const { title, description, img } = props;
	const image = img ? img : camera;

	return (
		<li className={style.solution__block}>
			<div className={style.solution__block_text}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<Image
				src={image}
				alt={`Изображение к ${title}`}
				width={500}
				height={500}
				priority
			/>
		</li>
	);
}
