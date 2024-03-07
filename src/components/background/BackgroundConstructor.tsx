import './background.css'

const BackgroundConstructor = () => {
	return (
		<div className='background-container'>
			<div className='background-glass'></div>
			<div className='background-circle-container left'>
				<div className='background-circle blue'></div>
				<div className='background-circle green'></div>
				<div className='background-circle azure'></div>
			</div>
			<div className='background-circle-container right'>
				<div className='background-circle blue right'></div>
				<div className='background-circle green right'></div>
				<div className='background-circle azure right'></div>
			</div>
		</div>
	)
}

export default BackgroundConstructor
