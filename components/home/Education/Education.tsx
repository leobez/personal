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

					<p>	
						(Udemy) <a href="https://www.udemy.com/certificate/UC-18f22563-60c4-4389-8c87-860fe6a9e4cb"  target="_blank" className="text-blue-600"> Curso de Node.js</a>, <a href="https://www.udemy.com/certificate/UC-ca2136f3-0c52-4a60-9586-11b9e6a8aaaa/"  target="_blank" className="text-blue-600">Curso de React.js</a>, <a href="https://www.udemy.com/certificate/UC-28863bd2-e9cb-4c55-85a7-80b8e43e47fb"  target="_blank" className="text-blue-600"> Curso de Docker</a>
					</p>

					<p>
						<a href="https://www.cursoemvideo.com" target="_blank" className="text-blue-600">(Curso em Vídeo)</a> HTML5 + CSS3, Git e Github, Javascript, Python3, MySQL
					</p>

				</div>

  		</div>
		</Section>

	)
}