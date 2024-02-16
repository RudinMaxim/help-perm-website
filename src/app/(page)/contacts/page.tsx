import { getMetadata } from '@/lib/helper/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
	title: 'Контакты',
});

export default function contacts() {
	return <main>HI</main>;
}
