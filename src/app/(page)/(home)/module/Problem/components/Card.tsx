'use client';
import { IDifficultie } from '@/lib/constants/difficulties';
import { useState } from 'react';
import { FaFaceLaugh } from 'react-icons/fa6';
import style from '../Problem.module.scss';

export function Card({ title, description, decision, icon }: IDifficultie) {
	const [isDecisionShow, setIsDecisionShow] = useState(false);

	const toggetCard = () => {
		setIsDecisionShow((prev) => !prev);
	};

	return (
		<li className={style.Card}>
			<div className={style.card_top}>
				<div className={style.icon} onClick={() => toggetCard()}>
					{isDecisionShow ? <FaFaceLaugh /> : icon}
				</div>

				<p>{!isDecisionShow ? 'Проблема' : 'Решение'}</p>
			</div>

			<div className={style.card_body}>
				<h3>{title}</h3>

				{!isDecisionShow && <p>{description}</p>}
				{isDecisionShow && <p>{decision}</p>}
			</div>
		</li>
	);
}
