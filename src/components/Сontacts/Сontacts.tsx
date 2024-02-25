import {
	EMAIL,
	MAIN_ADDRES_LINK,
	MAIN_ADDRES_NAME,
	PHONE,
} from '@/lib/constants/link';
import Link from 'next/link';
import { FaEnvelope, FaHouseChimneyUser, FaPhoneFlip } from 'react-icons/fa6';
import style from './Сontacts.module.scss';

export function Сontacts(): React.JSX.Element {
	return (
		<ul className={style.Сontacts}>
			<li>
				<FaPhoneFlip className={style.Сontacts__phone} />
				<div>
					<p>Номер телефона</p>
					<Link href={`tel:${PHONE}`} aria-label='Номер телефона'>
						{PHONE}
					</Link>
				</div>
			</li>
			<li>
				<FaEnvelope />
				<div>
					<p>Электронная почта</p>
					<Link href={`mailto:${EMAIL}`} aria-label='Электронная почта'>
						{EMAIL}
					</Link>
				</div>
			</li>
			<li>
				<FaHouseChimneyUser />

				<div>
					<p>Основной адрес</p>
					<Link href={MAIN_ADDRES_LINK} aria-label='Адрес'>
						{MAIN_ADDRES_NAME}
					</Link>
				</div>
			</li>
		</ul>
	);
}
