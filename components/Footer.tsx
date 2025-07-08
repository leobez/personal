'use client'

import { ThemeMap, useThemeStore } from "@/store/useThemeStore"
import Image from "next/image"

type Props = {
	maxWidth: number
}

export default function Footer({ maxWidth }: Props) {

	const { theme } = useThemeStore()

	return (
		<footer 
			style={{ 
				backgroundColor: ThemeMap[theme].headerBg,
				color: ThemeMap[theme].headerFont
			}} 
			className={`h-24 w-full z-20`}>

			<div
				style={{ 
					maxWidth: maxWidth,
				}} 
				className="h-full mx-auto flex justify-between items-center gap-2 p-2">
					
				<div>
					<p className="font-bold text-lg">Leonardo de Souza Bezerra</p>
					<p className="font-light">Portfolio pessoal</p>
				</div>

				<Image
						src={`/gifs/bonfire.gif`} 
						unoptimized={true} 
						alt='bonfire.gif' 
						height={80}
						width={80}
						style={{objectFit: "cover"}}
				/>

			</div>

		</footer>
	)
}