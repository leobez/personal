type Props = {
	children: React.ReactNode
}

export default function Section({ children }: Props) {

	return (
		<section className="w-full bg-white text-black p-2 border border-black">
			{children}
		</section>
	)
}