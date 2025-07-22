import { IconType } from "react-icons"

type SkillItem = {
  name: string
  icon: IconType
}

type Props = {
  title: string
  items: SkillItem[]
}

export default function SkillCategory({ title, items }: Props) {
  return (
    <div className="rounded-lg py-4 w-fit px-4">
      <p className="font-bold mb-2 text-left">{title}</p>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-md">
            <item.icon className="text-2xl" />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
