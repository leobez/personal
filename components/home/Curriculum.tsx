export default function Curriculum() {

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 scroll-mt-[100px]" id="curriculum">

            <div>
                <p className="font-bold text-lg">Curriculum</p>
            </div>
            
            <div className="flex flex-col gap-3">

                <div className="h-fit w-fit flex flex-col bg-color03 shadow-lg rounded-lg hover:opacity-50 duration-200 cursor-pointer">   
                    <a href="/pdf/Curriculum.pdf" download={'Leob-CV'} className="p-3">
                        Download CV
                    </a>
                </div>

                <div className="md:h-[700px] h-[500px] w-full">
                    <embed
                        src="/pdf/Curriculum.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        title="Embedded PDF Viewer"
                    />
                </div>


            </div>



        </section>
    )
}