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
            'Desenvolvimento de aplicações modernas com Nest.js',
						'Desenvolvimento de backoffices e painéis com Next.js',
						'Integração com tecnologias: postgres, redis, minio, nginx',
						'Criação e uso de migrations para atualizar o banco de dados de forma segura (prisma)',
            'Configuração de EC2 para servir aplicações Node (pm2)',
            'Configuração de certificados SSL para EC2',
            'Desenvolvimento de containers Docker para agilizar desenvolvimento local',
            'Integração com APIs externas para: validação de usuários, análise de risco, bancarização, gateway de pagamentos e integração com WhatsApp (chatbot)',
          ]}
        />
      </div>

    </Section>
  )
}