import { getMetadata } from '@/lib/helper/getMetadata';
import { Metadata } from 'next';
import { Cases, History, Info, Teams } from './modules';

export const metadata: Metadata = getMetadata({
	title: 'О нас',
});

export default function AboutUs() {
	return (
		<main>
			<Info />
			<History />
			<Teams />
			<Cases />
		</main>
	);
}
