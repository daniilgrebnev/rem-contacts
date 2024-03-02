import { data } from '../data'
import Item from './components/Item'
import './links-item.css'

const ItemContainer = () => {
	return (
		<div className='item-container'>
			{data.map((item, index) => (
				<div key={index} className=''>
					<Item
						name={item.name}
						isDisabled={item.isDisabled}
						text={item.text}
						link={item.link}
						icon={item.icon}
					/>
				</div>
			))}
		</div>
	)
}

export default ItemContainer
