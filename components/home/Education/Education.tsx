import Section from "@/components/Section";

export default function Education() {

	return (
		<Section id="education">
  		<h1 className="font-bold text-xl mb-4">&gt; Educação</h1>

  		<div className="space-y-2">

				<div className="p-2 rounded-lg">
					<p className="font-semibold text-md">Análise e Desenvolvimento de Sistemas</p>
					<p className="text-md">Fatec Americana "Ministro Ralph Biasi"</p>
					<p className="text-sm">2021 — 2025</p>
				</div>

				<div className="p-2 rounded-lg">
					<p className="font-semibold text-md">Informática integrada ao ensino médio</p>
					<p className="text-md">Escola Técnica Estadual Ferrucio Humberto Gazzetta </p>
					<p className="text-sm">2018 — 2020</p>
				</div>

				<div className="p-2 rounded-lg">
					<p className="font-semibold text-md mb-1">Cursos complementares</p>
					<ul className="list-disc list-inside text-md">
						<li>Curso de Node.js (Udemy)</li>
						<li>Curso de React.js (Udemy)</li>
						<li>Curso de Docker (Udemy)</li>
					</ul>
				</div>

  		</div>
		</Section>

	)
}