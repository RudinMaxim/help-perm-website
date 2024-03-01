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
		name: 'Помощь себе',
		url: '/help-myself',
	},
	// {
	// 	name: 'Документы',
	// 	url: '/documentation',
	// },
];
