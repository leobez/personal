import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Image from 'next/image'
import Section from "@/components/Section";
import AboutMeIcon from "./Icon";

export default function AboutMe() {

	return (
		<Section id="about">

			<div className="w-full flex flex-col md:flex-row items-stretch">

				<div className="md:w-4/5 flex flex-col gap-4">
				
					<h1 className="font-bold text-xl">&gt; Sobre mim</h1>

					<p className="text-justify font-light leading-relaxed text-sm md:text-base">
						Olá! Me chamo Leonardo e sou um desenvolvedor focado em Backend. Tenho experiência sólida com Node.js e NestJS no desenvolvimento de aplicações como APIs REST, microsserviços e webhooks.
						<br/>
						<br/>
						Também possuo conhecimentos em infraestrutura, tendo configurado instâncias EC2 para hospedar aplicações Node.js de forma eficiente. Também trabalho com bancos de dados PostgreSQL e Redis. Ademais, tenho prática com Docker e Nginx para containerização e balanceamento de carga.
						<br/>
						<br/>
						Nas horas vagas, busco aprimorar meus conhecimentos em design patterns e arquitetura de software, além de explorar automação e desenvolvimento de jogos.
					</p>

				</div>

				<div className="md:w-1/5 flex flex-col sm:flex-row justify-center w-full">

					<div className="flex mt-8 md:my-0 md:flex-col gap-4 justify-center items-center w-full sm:w-auto px-4">
						<AboutMeIcon
							icon={FaLinkedin}
							text="LinkedIn"
							link="https://www.linkedin.com/in/leosouz"
						/>
						<AboutMeIcon
							icon={FaGithub}
							text="GitHub"
							link="https://github.com/leobez"
						/>
						<AboutMeIcon
							icon={IoMailOutline}
							text="E-mail"
							link="mailto:leobez.contato@gmail.com"
						/>
						<AboutMeIcon
							icon={FaWhatsapp}
							text="WhatsApp"
							link="https://wa.me/5519998250343"
						/>
					</div>

					{/* <div className="hidden md:flex justify-center">
						<Image
							src="/images/photo.jpg"
							alt="Minha foto"
							height={320}
							width={320}
							className="rounded-xl object-cover shadow-md max-w-full h-auto"
						/>
					</div> */}

				</div>

			</div>
		</Section>
	)
}