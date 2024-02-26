import { FEATURE_PAGE_CONTENT, IFEATURE_PAGE } from '@/lib/constants/content';
import Image from 'next/image';
export function Solution() {
	return (
		<section>
			{FEATURE_PAGE_CONTENT.map((content) => (
				<SolutionBlock key={`Solution_${content.title}`} {...content} />
			))}
		</section>
	);
}

function SolutionBlock(props: IFEATURE_PAGE) {
	const { title, description, img } = props;
	return (
		<div>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

			{img && <Image src={img} alt={`Изображение к ${title}`} />}
		</div>
	);
}
