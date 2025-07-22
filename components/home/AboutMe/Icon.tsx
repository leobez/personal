type Props = {
  icon: React.ElementType;
  text: string;
  link: string;
}

export default function AboutMeIcon({ icon: Icon, text, link }: Props) {

  return (
    <a href={link} target="_blank" className="text-xs flex flex-col items-center">
      <Icon size={30}/>
      <span className="block">{text}</span>
    </a>
  )
}