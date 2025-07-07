import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import GradualText from "./GradualText";
import { IoMailOutline, IoMedalOutline } from "react-icons/io5";
import Image from 'next/image'
import Section from "@/components/Section";
import AboutMeIcon from "./Icon";

export default function AboutMe() {

	return (
		<Section>

			<div className="w-full flex gap-2">

				<div className="w-1/2 flex flex-col gap-2">
					<h1 className="font-bold text-xl">Sobre mim</h1>

					<p className="text-justify font-light">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatum necessitatibus fugiat delectus laborum ipsam, odit dolor adipisci. Dolorum quos adipisci excepturi earum tenetur nobis neque cum eum ullam quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cumque est, temporibus aspernatur magnam id numquam recusandae! Ullam cupiditate ea in expedita. Consectetur praesentium quisquam expedita animi enim, a aspernatur.
					</p>
				</div>

 				<div className="w-1/2 flex items-center justify-center gap-2">

					<div className="border-2 border-black flex flex-col gap-2 items-center justify-between h-full p-2 rounded-lg">

						<AboutMeIcon
							icon={FaLinkedin}
							text="Linkedin"
							link="https://www.linkedin.com/in/leosouz/"
						/>

						<AboutMeIcon
							icon={FaGithub}
							text="Github"
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

					<div className="">
						<Image 
							src={`/images/photo.jpg`} 
							alt='photo' 
							height={320}
							width={320}
							objectFit="cover"
							style={{
								objectPosition: 'center', 
								borderRadius: '0.5rem'
							}}
						/>
					</div>

				</div>

			</div>

		</Section>
	)
}