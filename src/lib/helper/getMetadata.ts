import { type Metadata } from 'next';
import { BASE_URL } from '../constants/url';

/**
 * Получает метаданные для страницы на основе предоставленных реквизитов.
 *
 * Устанавливает разумные значения по умолчанию, если реквизиты не указаны.
 * Возвращает объект метаданных, содержащий заголовок, описание, ключевые слова,
 * авторы, значки и метаданные открытых графиков.
 */

interface IMetadata {
	title?: string;
	description?: string;
	keywords?: string | Array<string>;
	url?: string;
}

export const getMetadata = (props: IMetadata): Metadata => {
	return {
		title: props.title ?? 'BeautySync',
		description:
			props.description ??
			'Сервис для красоты и здоровья, которое удобно для всех! Найди мастера или клиента в несколько кликов. Легко отслеживай детали услуги и не беспокойся о лишнем. Синхронизируй свою красоту!',
		keywords: props.keywords ?? [
			'IT-сервис',
			'индустрия красоты и здоровья',
			'IT-сервис индустрия красоты и здоровья',
			'взаимодействие клиента и мастера',
			'гибкий выбор услуги и мастера',
		],
		authors: {
			name: 'Максим Рудин',
			url: 'https://github.com/RudinMaxim',
		},
		icons: [
			{
				url: `${BASE_URL}/android-chrome-512x512.png`,
				sizes: '512x512',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/android-chrome-192x192.png`,
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/apple-touch-icon.png`,
				sizes: '180x180',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/favicon-32x32.png`,
				sizes: '32x32',
				type: 'image/png',
			},
			{
				url: `${BASE_URL}/favicon-16x16.png`,
				sizes: '16x16',
				type: 'image/png',
			},
		],

		other: {
			'og:type': 'website',
			'og:title': `${props.title ?? 'BeautySync'}`,
			'og:url': `${props.url ? BASE_URL + '/' + props.url : BASE_URL + '/'}`,
			'og:site_name': 'BeautySync',
			'og:description':
				props.description ??
				'Сервис для красоты и здоровья, которое удобно для всех! Найди мастера или клиента в несколько кликов. Легко отслеживай детали услуги и не беспокойся о лишнем. Синхронизируй свою красоту!',
			'og:locale': 'ru_RU',
			'og:locale:alternate': 'en_US',
			'og:image': `${BASE_URL}/android-chrome-512x512.png`,
			'og:image:width': '512',
			'og:image:height': '512',
			'og:image:alt': 'BeautySync',
			'og:image:type': 'image/png',
			'og:image:secure_url': `${BASE_URL}/android-chrome-512x512.png`,
		},
	};
};
