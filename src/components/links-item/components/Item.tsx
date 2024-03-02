import { IData } from '@/components/data'
import Link from 'next/link'
import ItemContent from './ItemContent'

const Item: any = ({ name, text, icon, link, isDisabled }: IData) => {
	return (
		<div className=''>
			{isDisabled ? (
				<ItemContent
					name={name}
					isDisabled={isDisabled}
					text={text}
					link={link}
					icon={icon}
				/>
			) : (
				<Link href={link}>
					<ItemContent
						name={name}
						isDisabled={isDisabled}
						text={text}
						link={link}
						icon={icon}
					/>
				</Link>
			)}
		</div>
	)
}

export default Item
