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
		name: 'Помощь себе',
		url: '/help-myself',
	},
	{
		name: 'О нас',
		url: '/about-us',
	},
	// {
	// 	name: 'Контакты',
	// 	url: '/contacts',
	// },
];
