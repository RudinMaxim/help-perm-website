'use client';
import { Modal } from '@/components/ui';
import { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { Button } from '../ui';
import { AnimatePresence, motion } from 'framer-motion';

export function HelpButton() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<Button
				type='button'
				style={{ whiteSpace: 'nowrap' }}
				onClick={handleClick}>
				Нужна помощь
				<FaShieldAlt />
			</Button>
			{isOpen && (
				<Modal SwitchModal={handleClick} isMobile={false} title='Нужна помощь'>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur a voluptates, vel error itaque, labore neque
						necessitatibus tenetur cum quia fugiat nam culpa impedit nulla quo
						harum, facilis nobis libero!Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Consequuntur a voluptates, vel error itaque,
						labore neque necessitatibus tenetur cum quia fugiat nam culpa
						impedit nulla quo harum, facilis nobis libero!Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Consequuntur a voluptates, vel
						error itaque, labore neque necessitatibus tenetur cum quia fugiat
						nam culpa impedit nulla quo harum, facilis nobis libero!Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Consequuntur a
						voluptates, vel error itaque, labore neque necessitatibus tenetur
						cum quia fugiat nam culpa impedit nulla quo harum, facilis nobis
						libero!
					</div>
				</Modal>
			)}
		</>
	);
}
