export default function Curriculum() {

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex flex-col gap-5 scroll-mt-[100px]" id="curriculum">

            <div>
                <p className="font-bold text-lg">Curriculum</p>
            </div>
            
            <div className="flex justify-between">

                <div className="h-[600px] w-9/12">
                    <embed
                        src="Curriculum.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        title="Embedded PDF Viewer"
                    />
                </div>

                <div className="h-fit flex flex-col bg-color03 shadow-lg rounded-lg hover:opacity-50 duration-200 cursor-pointer">   
                    <a href="/Curriculum.pdf" download={'Leob-CV'} className="p-5">
                        Donwload CV
                    </a>
                </div>
            </div>



        </section>
    )
}