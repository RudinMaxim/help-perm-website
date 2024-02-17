import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import { getMetadata } from '@/lib/helper/getMetadata';
import { Header } from '@/components/Header/Header';

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
			</body>
		</html>
	);
}
