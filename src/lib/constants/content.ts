import { MAIN_ADDRES_NAME, PHONE } from './link';

export type IFEATURE_PAGE = {
	title: string;
	description: string;
	img?: string;
};

export const FEATURE_PAGE_CONTENT: IFEATURE_PAGE[] = [
	{
		title: 'Что делать в трудной ситуации?',
		description:
			'Если вы столкнулись с зависимостью или находитесь в трудной ситуации, вы не одиноки. Мы здесь, чтобы помочь вам преодолеть свои трудности и зависимости, и начать новую жизнь. Наш сайт предоставляет вам информацию, поддержку и ресурсы, которые помогут вам справиться с любой проблемой, с которой вы столкнулись.',
		img: '/home2.jpg',
	},
	{
		title: 'Как мы можем вам помочь?',
		description: `Мы предлагаем вам следующие виды помощи:  \n
			- Помощь в поиске решений. Мы поможем вам найти лучший способ выйти из трудной ситуации, или направим вас к специалистам, которые смогут оказать вам профессиональную помощь.
			 - Поддержка и уважение. Мы не судим вас и не
			сравниваем с другими. Мы ценим вас за то, кто вы есть, и подчеркиваем
			ваши сильные стороны и достижения. 
		
			\n - Конструктивные действия. Мы предложим вам, как заняться
			чем-то полезным и приятным, что повысит ваше настроение и самооценку,
			такие как спорт, обучение, волонтерство, творчество и т.д.`,
		img: '/home3.jpg',
	},
	{
		title: 'Почему вы можете нам доверять?',
		description: `Мы не просто сайт, мы - сообщество людей, которые знают, что такое быть в трудной ситуации, и как из нее выйти. Мы - опытные и квалифицированные психологи, социальные работники, врачи, консультанты, тренеры и волонтеры, которые готовы поделиться с вами своими знаниями, опытом и советами. Мы - дружелюбные и отзывчивые люди, которые всегда рады слушать вас, поддержать вас и помочь вам.`,
		img: '/home4.jpg',
	},
];
export const howHelp: string[] = [
	`Позвоните нам по телефону ${PHONE}, и мы ответим на все ваши вопросы`,
	`Посетите наш офис по адресу ${MAIN_ADDRES_NAME}`,
	'Заполнить форму, в шапке',
];
