import { getMetadata } from '@/lib/helper/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
	title: 'Как помочь себе, в трудной ситуацией',
});

export default function HelpMyself() {
	return <main>HI</main>;
}
