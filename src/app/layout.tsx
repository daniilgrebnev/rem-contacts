import { BackgroundConstructor } from '@/components/background'
import { Header } from '@/components/header/'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className=''>
				<Header />
				<BackgroundConstructor />
				{children}
			</body>
		</html>
	)
}
