import Section from '@/components/Section'
import ExperienceItem from './ExperienceItem'

export default function ExperienceSection() {
  return (
    <Section id='experience'>

      <h1 className="font-bold text-xl mb-4">&gt; Experiência</h1>

      <div className="flex flex-col">
        <ExperienceItem
          empresa="Global finanças"
					cargo="Desenvolvedor Full Stack"
          tempo="6 meses (estágio)"
          atividades={[
            'Desenvolvimento e manutenção de aplicações com NestJS',
						'Desenvolvimento de backoffices e painéis com Next.js',
						'Integração com: Postgres, Redis, Minio, Nginx, Docker',
						'Configuração de ambientes EC2 para produção ',
            'Integração de API’s externas para: Validação de usuários; Análise de risco; Bancarização; Gateway de pagamentos; Integração com WhatsApp (chatbot)',
          ]}
        />
      </div>

    </Section>
  )
}