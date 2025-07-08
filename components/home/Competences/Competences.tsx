import Section from "@/components/Section";
import SkillCategory from "./SkillCategory";

// data/skills.ts
import { SiNestjs, SiPostgresql, SiNextdotjs, SiTailwindcss, SiDocker, SiAmazonaws, SiRedis, SiNginx, SiGithub, SiPrisma, SiReact, SiNodedotjs } from "react-icons/si"
import { MdLanguage } from "react-icons/md";

export const skills = [
  {
    title: 'Backend && Frontend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Nest.js', icon: SiNestjs },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React.js', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ]
  },
  {
    title: 'Infra',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Git && GitHub', icon: SiGithub },
      { name: 'AWS (EC2, Lambda, RDS, S3)', icon: SiAmazonaws }
    ]
  },
  {
    title: 'Outras competências',
    items: [
      {
        name: 'Inglês - B1 (leitura técnica fluente)',
        icon: MdLanguage
      }
    ]
  }
]


export default function Competences() {

	return (
		<Section id="competences">
      <h1 className="font-bold text-xl mb-4">&gt; Competências</h1>
      <div className="flex flex-col md:flex-row flex-wrap">
        {skills.map((group, idx) => (
          <SkillCategory key={idx} title={group.title} items={group.items} />
        ))}
      </div>
    </Section>
	
	)

}