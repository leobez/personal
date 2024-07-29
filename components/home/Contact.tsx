export default function Contact() {

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex flex-col gap-5 scroll-mt-[100px] max-w-full" id="contact">

            <div>
                <p className="font-bold text-lg">Contato</p>
            </div>
            
            <form className="p-5 flex flex-col gap-5">

                <div>
                    Caso queira enviar uma mensagem :)
                </div>
                
                <div>
                    <textarea name="message" id="message" className="h-80 w-full resize-none" />
                </div>

                <div className="flex gap-1">
                    <input type="submit" value="Enviar" className="p-4 bg-color03 rounded-lg hover:opacity-50 cursor-pointer duration-200" />
                    <input type="reset" value="Apagar" className="p-4 bg-color03 rounded-lg hover:opacity-50 cursor-pointer duration-200"/>
                </div>

            </form>

        </section>
    )
}