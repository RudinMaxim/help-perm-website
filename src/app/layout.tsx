import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
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
				{children}
				<LeadForm />
				<Footer />
				{/* <ScrollButton /> */}
			</body>
		</html>
	);
}
