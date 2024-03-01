import { Header, ScrollButton } from '@/components';
import { Footer } from '@/components/Footer/Footer';
import { getMetadata } from '@/lib/helper/getMetadata';
import { LeadForm } from '@/module/LedForm/LeadForm';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = getMetadata({});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={montserrat.className}>
				<Header />
				<main>{children}</main>
				<LeadForm />
				<Footer />
				<ScrollButton location={{ left: '1rem', bottom: '1rem' }} />
			</body>
		</html>
	);
}
