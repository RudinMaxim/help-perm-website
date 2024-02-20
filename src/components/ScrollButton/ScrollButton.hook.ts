import { useEffect, useState } from 'react';
import { IScrollButton } from './ScrollButton';

export const useScrollButton = (props: IScrollButton) => {
	const { startDisplay, location, size } = props;

	const [scrollProgress, setScrollProgress] = useState<number>(0);
	const [showProgress, setShowProgress] = useState<boolean>(false);
	const [styles, setStyles] = useState({});

	const handleClick = () => {
		document.documentElement.scrollTop = 0;
	};

	const calcScrollValue = () => {
		const pos: number = document.documentElement.scrollTop;
		const calcHeight: number =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrollValue: number = Math.round((pos * 100) / calcHeight);

		setScrollProgress(scrollValue);
		setShowProgress(pos > 100);
	};

	useEffect(() => {
		window.addEventListener('scroll', calcScrollValue);
		window.addEventListener('load', calcScrollValue);

		return () => {
			window.removeEventListener('scroll', calcScrollValue);
			window.removeEventListener('load', calcScrollValue);
		};
	}, []);

	const stylesObject = {
		display: showProgress ? 'grid' : 'none',
		background: `conic-gradient(var(--text-color) ${scrollProgress}%, var(--primary-color) ${scrollProgress}%)`,
		left: location?.left,
		right: location?.right,
		top: location?.top,
		bottom: location?.bottom,
		width: size?.width,
		height: size?.height,
	};

	useEffect(() => {
		setStyles(stylesObject);
	}, [scrollProgress, showProgress]);

	return { styles, handleClick };
};
