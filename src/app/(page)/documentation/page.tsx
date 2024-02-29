import { getMetadata } from '@/lib/helper/getMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
	title: 'Документы',
});

export default function page() {
	return <div>page</div>;
}
