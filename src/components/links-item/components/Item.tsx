import { IData } from '@/components/data'
import Image from 'next/image'
import Link from 'next/link'

const Item = ({ name, text, icon, link, isDisabled }: IData) => {
	return (
		<div className=''>
			{isDisabled ? (
				<div className='item disabled'>
					<div className='item-content'>
						<Image src={icon} alt='Phone' width={30} />
						<p>{name}</p>
					</div>
					{text.length > 0 && <p className='plain-text'>{text}</p>}
				</div>
			) : (
				<Link href={link}>
					<div className='item'>
						<div className='item-content'>
							<Image src={icon} alt='Phone' width={30} />
							<p>{name}</p>
						</div>
						{text.length > 0 && <p className='plain-text'>{text}</p>}
					</div>
				</Link>
			)}
		</div>
	)
}

export default Item
