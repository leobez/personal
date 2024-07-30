export default function Education() {

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 scroll-mt-[100px]" id="education">
            
            <div>
                <p className="font-bold text-lg">Educação</p>
            </div>
            
            <div className="p-3 flex flex-col gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold">Escola Técnica Estadual Ferrucio Humberto Gazzetta - Nova Odessa</p>
                    <p>Técnico de informática.</p>
                    <p className="text-sm">2018 - 2021</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span> HTML5, CSS3, lógica de programação</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold"> Fatec Americana "Ministro Ralph Biasi" - Americana</p>
                    <p>Técnologo em analise e desenvolvimento de sistemas.</p>
                    <p className="text-sm">2021 - 2024</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>engenharia de software, análise de sistemas, banco de dados, OOP</p> */}
                </div>

            </div>

            <div>
                <p className="font-bold text-lg">Cursos</p>
            </div>
            
            <div className="p-3 flex flex-col gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold">Microlins</p>
                    <p>Capacitação em informática [80 horas]</p>
                    <p className="text-sm">2017 - 2018</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>Office 365, informática</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold">American English Learning (AEL)</p>
                    <p>Inglês [70 horas]</p>
                    <p className="text-sm">2018 - 2018</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>inglês</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold">Udemy</p>
                    <p>React.js [40 horas] e Node.js [40 horas]</p>
                    <p className="text-sm">2023 - 2024</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>Competências: JavaScript, React.js, Node.js, Express.js, MySQL</p> */}
                </div>

            </div>
            
        </section>
    )
}