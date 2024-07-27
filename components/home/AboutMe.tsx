import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function AboutMe() {

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex gap-5 h-[500px] scroll-mt-[100px]" id="about_me">

            <div className="w-2/3 flex flex-col gap-5">
                <h1 className="text-xl">
                    Olá, Me chamo Leonardo!
                </h1>
                <p className="text-justify font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur reprehenderit. Non, ipsum aut? Eaque quas incidunt, cum necessitatibus commodi ex officiis ipsum pariatur deserunt minima animi delectus perferendis error! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi eaque sed veritatis ratione magnam rem ducimus labore unde necessitatibus, temporibus fugiat perferendis adipisci culpa quos error aperiam eum? Minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, similique id officiis tempore dolorem facere sunt eos quaerat quidem? Officia distinctio, numquam delectus excepturi repudiandae corrupti harum nam. Fugiat, id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ratione ducimus dignissimos, et cumque saepe labore consequatur assumenda distinctio minima quae soluta asperiores aperiam provident ab at beatae cupiditate! Facere.
                </p>
            </div>

            <div className="border-2 border-black w-1/3 h-full min-h-96 flex flex-col justify-between">
                <img src="" alt="Photo" />
                <div className="border-t-2 border-black w-full flex gap-3 p-2 items-center justify-end">
                    <a href="https://www.linkedin.com/in/leosouz/" target="_blank" className="p-2"><FaLinkedin size={30}/></a>
                    <a href="https://github.com/leobez" target="_blank" className="p-2"><FaGithub size={30}/></a>
                </div>
            </div>

        </section>
    )
}