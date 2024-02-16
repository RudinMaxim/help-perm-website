import { getMetadata } from '@/lib/helper/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
	title: 'О нас',
});

export default function AboutUs() {
	return <main>HI</main>;
}
