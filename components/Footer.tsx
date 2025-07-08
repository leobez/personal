import Image from "next/image"

type Props = {
	maxWidth: number
}

export default function Footer({ maxWidth }: Props) {

	return (
		<footer className={`h-24 w-full bg-black text-white z-20`}>

			<div
				style={{ maxWidth }} 
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