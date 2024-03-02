import { IData } from '@/components/data'
import Image from 'next/image'

const ItemContent = ({ name, text, icon, link, isDisabled }: IData) => {
	return (
		<div className='item-content-container'>
			<div className={`item ${isDisabled ? 'disabled' : ''}`}>
				<div className='item-content'>
					<Image src={icon} alt='Phone' width={30} />
					<p>{name}</p>
				</div>
				{text.length > 0 && <p className='plain-text'>{text}</p>}
			</div>
		</div>
	)
}

export default ItemContent
