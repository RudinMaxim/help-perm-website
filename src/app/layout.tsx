import { Header } from '@/components/Header/Header';
import { getMetadata } from '@/lib/helper/getMetadata';
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

				{/* <ScrollButton /> */}
			</body>
		</html>
	);
}
