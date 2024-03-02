import Phone from '@/icons/call.svg'
import Mail from '@/icons/mail.svg'
import Map from '@/icons/map.svg'
import Telegram from '@/icons/tg.svg'
import Whatsapp from '@/icons/whatsapp.svg'

export interface IData {
	name: string
	text: string
	icon: any
	link: string
	isDisabled: boolean
}

export const data: IData[] = [
	{
		name: 'Позвонить',
		text: '+7 (951) 850-43-60',
		icon: Phone,
		link: 'tel:+79518504360',
		isDisabled: false,
	},
	{
		name: 'WhatsApp',
		text: '',
		icon: Whatsapp,
		link: 'https://wa.me/79518504360',
		isDisabled: false,
	},
	{
		name: 'Telegram',
		text: '',
		icon: Telegram,
		link: '#',
		isDisabled: true,
	},
	{
		name: 'Почта',
		text: '',
		icon: Mail,
		link: 'mailto:#',
		isDisabled: true,
	},
	{
		name: 'На карте',
		text: '',
		icon: Map,
		link: '#',
		isDisabled: true,
	},
]
