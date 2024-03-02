'use client'
import Image from 'next/image'
import './header.css'

import Logo from '../../icons/logo.svg'

const Header = () => {
	return (
		<header>
			<Image src={Logo} alt='' width={0} height={0} />
		</header>
	)
}

export default Header
