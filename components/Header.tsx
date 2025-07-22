'use client'

import { ThemeMap, useThemeStore } from "@/store/useThemeStore"
import Navbar from "./Navbar"

type Props = {
	maxWidth: number
}

export default function Header({ maxWidth }: Props) {

	const { theme } = useThemeStore()

	return (
		<header
			style={{ 
				backgroundColor: ThemeMap[theme].headerBg,
				color: ThemeMap[theme].headerFont
			}} 
			className="h-24 w-full sticky top-0 z-20 transition-colors duration-500 ease-in-out">

			<div 
				style={{ maxWidth }} 
				className={`h-full mx-auto p-2 flex items-center justify-between gap-5`}>

				<div>
						<p className="font-bold text-lg">Leonardo de Souza Bezerra</p>
						<p className="font-light">Portfolio pessoal</p>
				</div>

				<Navbar/>

			</div>
		</header>
	)
}