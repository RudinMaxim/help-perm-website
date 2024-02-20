'use client';
import Image from 'next/image';
import { arrowToRight } from '../../assets/icons';
import { useScrollButton } from './ScrollButton.hook';
import style from './ScrollButton.module.scss';

export interface IScrollButton {
	startDisplay?: number; // default 100
	size?: {
		width: number; // default 70
		height: number; // default 70
	};
	location?: {
		left?: string | 'auto';
		right?: string | 'auto';
		top?: string | 'auto';
		bottom?: string | 'auto';
	};
}

export function ScrollButton({
	startDisplay = 100,
	size = {
		width: 65,
		height: 65,
	},
	location = {
		left: 'auto',
		right: '1rem',
		top: 'auto',
		bottom: '1rem',
	},
}: IScrollButton): React.JSX.Element {
	const { styles, handleClick } = useScrollButton({
		startDisplay,
		size,
		location,
	});

	return (
		<button
			className={style.scroll__button}
			style={styles}
			onClick={handleClick}>
			<span className={style.progress_value} aria-label='На верх'>
				<Image alt='На верх' src={arrowToRight} width={40} height={40} />
			</span>
		</button>
	);
}
