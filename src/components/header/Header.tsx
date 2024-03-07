'use client'
import Image from 'next/image'
import './header.css'

import Logo from '../../icons/logo.svg'

const Header = () => {
	return (
		<header>
			<div className='img'>
				<Image src={Logo} alt='' width={0} height={0} />
			</div>
		</header>
	)
}

export default Header
