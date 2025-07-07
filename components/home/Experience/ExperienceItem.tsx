type ExperienceItemProps = {
  empresa: string
  tempo: string
  cargo: string;
  atividades: string[]
}

export default function ExperienceItem({ empresa, cargo, tempo, atividades }: ExperienceItemProps) {
  return (
    <div className="rounded-lg p-4 bg-white text-black mb-4">
      <p className="font-bold text-lg">{empresa} | {cargo}</p>
      <p className="text-md mb-1">Tempo de atuação: {tempo}</p>
      <p className="text-md mb-1">Atividades:</p>
      <ul className="list-disc list-inside text-md pl-2">
        {atividades.map((item, index) => (
          <li key={index} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  )
}
