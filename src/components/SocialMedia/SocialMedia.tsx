import { TELEGRAM_LINK, VK_LINK } from '@/lib/constants/link';
import Link from 'next/link';
import { FaTelegram, FaVk } from 'react-icons/fa6';
import style from './SocialMedia.module.scss';

export function SocialMedia(): React.JSX.Element {
	return (
		<ul className={style.SocialMedia}>
			<li>
				<Link href={VK_LINK} aria-label='Ссылка VK' data-title='Ссылка VK'>
					<FaVk className={style.Vk} />
				</Link>
			</li>

			<li>
				<Link
					href={TELEGRAM_LINK}
					aria-label='Ссылка Telegram'
					data-title='Ссылка Telegram'>
					<FaTelegram className={style.Telegram} />
				</Link>
			</li>
		</ul>
	);
}
