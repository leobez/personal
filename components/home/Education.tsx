export default function Education() {

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 ">
            
            <div>
                <p className="font-bold text-lg">Titulo</p>
            </div>
            
            <div className="p-3 flex flex-col gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold">Escola Técnica Estadual Ferrucio Humberto Gazzetta - Nova Odessa</p>
                    <p>A</p>
                    <p className="text-sm">2018 - 2021</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span> HTML5, CSS3, lógica de programação</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold"> Fatec Americana "Ministro Ralph Biasi" - Americana</p>
                    <p>A</p>
                    <p className="text-sm">2021 - 2024</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>engenharia de software, análise de sistemas, banco de dados, OOP</p> */}
                </div>

            </div>

            <div>
                <p className="font-bold text-lg">A</p>
            </div>
            
            <div className="p-3 flex flex-wrap gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Microlins</p>
                    <p>A</p>
                    <p className="text-sm">2017 - 2018</p>
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">American English Learning (AEL)</p>
                    <p>A</p>
                    <p className="text-sm">2018 - 2018</p>
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Udemy</p>

                    <div className="flex gap-3">
                        <p>React.js</p>
                        <a href="https://www.udemy.com/certificate/UC-ca2136f3-0c52-4a60-9586-11b9e6a8aaaa/" target="_blank" className="hover:text-color04 duration-200">A</a>
                    </div>

                    <p className="text-sm">2023 - 2024</p>
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Udemy</p>

                    <div className="flex gap-3">
                        <p>Node.js</p>
                        <a href="https://www.udemy.com/certificate/UC-18f22563-60c4-4389-8c87-860fe6a9e4cb/" target="_blank" className="hover:text-color04 duration-200">A</a>
                    </div>

                    <p className="text-sm">2023 - 2024</p>
                </div>
                
                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Udemy</p>

                    <div className="flex gap-3">
                        <p>Docker</p>
                        <a href="https://www.udemy.com/certificate/UC-28863bd2-e9cb-4c55-85a7-80b8e43e47fb/" target="_blank" className="hover:text-color04 duration-200">A</a>
                    </div>
      
                    <p className="text-sm">2023 - 2024</p>
                </div>

            </div>
            
        </section>
    )
}