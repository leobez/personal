type Props = {
	maxWidth: number
}

export default function Header({ maxWidth }: Props) {

	return (
		<header className="h-24 w-full bg-black text-white sticky top-0">

			<div 
				style={{ maxWidth }} 
				className={`h-full mx-auto p-2 flex items-center gap-5`}>

				<div>
						<p className="font-bold text-lg">Leonardo de Souza Bezerra</p>
						<p className="font-light">Portfolio pessoal</p>
				</div>

			</div>
		</header>
	)
}