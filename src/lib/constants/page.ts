interface IPagesMap {
	name: string;
	url: string;
}
export const pagesMap: Array<IPagesMap> = [
	{
		name: 'Главная',
		url: '/',
	},
	{
		name: 'О нас',
		url: '/about-us',
	},
	{
		name: 'Документы',
		url: '/documentation',
	},
	{
		name: 'Помощь себе',
		url: '/help-myself',
	},
];
