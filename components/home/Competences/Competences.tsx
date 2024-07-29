import AnimatedPool from "./AnimatedPool";


export default function Competences() {

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex flex-col gap-5 scroll-mt-[100px] max-w-full" id="competence">

            <div>
                <p className="font-bold text-lg">Competências</p>
            </div>

            <div className="flex">
                <div className="p-5 flex flex-col gap-5 w-1/2">

                    <div className="bg-color03 p-5 rounded-lg shadow-md font-light">
                        <p className="font-bold">Front-end</p>
                        <p>HTML, CSS, JavaScript, React.js, Tailwind CSS.</p>
                    </div>

                    <div className="bg-color03 p-5 rounded-lg shadow-md font-light">
                        <p className="font-bold">Back-end</p>
                        <p>Node.js, Next.js, Express.js.</p>
                    </div>

                    <div className="bg-color03 p-5 rounded-lg shadow-md font-light">
                        <p className="font-bold">Banco de dados</p>
                        <p>MySQL, MongoDB.</p>
                    </div>

                    <div className="bg-color03 p-5 rounded-lg shadow-md font-light">
                        <p className="font-bold">Ferramentas</p>
                        <p>Git, Github, Office 365.</p>
                    </div>

                    <div className="bg-color03 p-5 rounded-lg shadow-md font-light">
                        <p className="font-bold">Conceitos</p>
                        <p>Estrutura de dados, Programação orientada a objetos, lógica de programação.</p>
                    </div>

                    <div className="bg-color03 p-5 rounded-lg shadow-md font-light">
                        <p className="font-bold">Idiomas</p>
                        <p>Português, Inglês</p>
                    </div>

                </div>

                <AnimatedPool/>
            </div>



        </section>
    )
}