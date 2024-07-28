export default function Projects() {

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex flex-col gap-5 scroll-mt-[100px]" id='projects'>

            <div>
                <p className="font-bold text-lg">Projetos</p>
                <p className="font-light"><a href="https://github.com/leobez?tab=repositories" target="_blank" className=" hover:text-color04 duration-200">Repositórios do github</a></p> 
            </div>
            
            <div className="p-5 flex flex-wrap">

                <div className="bg-color04 border border-color02 h-64 w-1/3">
                </div>

                <div className="bg-color04 border border-color02 h-64 w-1/3">
                </div>

                <div className="bg-color04 border border-color02 h-64 w-1/3">
                </div>

                <div className="bg-color04 border border-color02 h-64 w-1/3">
                </div>

                <div className="bg-color04 border border-color02 h-64 w-1/3">
                </div>

            </div>

        </section>
    )
}