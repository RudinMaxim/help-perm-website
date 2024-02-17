import style from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
}

export function Button({
	children,
	type,
	value,
	disabled = false,
	...rest
}: IButton) {
	return (
		<button type={type!} className={style.Button} {...rest}>
			{children}
		</button>
	);
}
