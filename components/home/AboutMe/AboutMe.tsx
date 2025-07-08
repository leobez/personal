import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Image from 'next/image'
import Section from "@/components/Section";
import AboutMeIcon from "./Icon";

export default function AboutMe() {

	return (
		<Section id="about">

			<div className="w-full flex flex-col md:flex-row items-start">

				<div className="md:w-1/2 flex flex-col gap-4">
					<h1 className="font-bold text-xl">&gt; Sobre mim</h1>

					<p className="text-justify font-light leading-relaxed text-sm md:text-base">
						Olá! Me chamo Leonardo e sou um desenvolvedor focado em Backend. Possuo experiência em Node.js, usando Nestjs para desenvolver microsserviços e APIs eficientes. Já desenvolvi aplicações até o ponto de produção e configurei instâncias EC2 para servir as aplicações com sgurança e eficiência. Ademais, também tenho experiência no uso de postgres, redis, docker e nginx. Nas horas vagas estou sempre estudando a aprimorando meus conhecimentos em design patterns e arquitetura de sistemas, além de experimentar com Game dev.  
					</p>

				</div>

				<div className="md:w-1/2 flex flex-col sm:flex-row justify-end w-full">

					<div className="flex my-4 md:my-0 md:flex-col gap-2 md:justify-between justify-end w-full sm:w-auto px-4">
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

					{/* Foto */}
					<div className="hidden md:flex justify-center">
						<Image
							src="/images/photo.jpg"
							alt="Minha foto"
							height={320}
							width={320}
							className="rounded-xl object-cover shadow-md max-w-full h-auto"
						/>
					</div>

				</div>

			</div>
		</Section>
	)
}