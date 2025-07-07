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

					<p className="text-justify font-light leading-relaxed text-sm md:text-base text-black">
						Sou desenvolvedor focado em Backend, com experiência em Node.js, Nestjs, bancos de dados relacionais e não relacionais. Gosto de arquitetura de sistemas e programação com práticas saúdaveis de código limpo [TODO: EC2, DOCKER ETC]
					</p>
				</div>

				<div className="md:w-1/2 flex flex-col sm:flex-row justify-end w-full">

					<div className="flex flex-col gap-2 text-black justify-between w-full sm:w-auto px-4">
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
					<div className="flex justify-center">
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