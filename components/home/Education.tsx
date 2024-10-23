import { useTranslations } from "next-intl"

export default function Education() {

    const t = useTranslations('Education')

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 ">
            
            <div>
                <p className="font-bold text-lg">{t('title')}</p>
            </div>
            
            <div className="p-3 flex flex-col gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold">Escola Técnica Estadual Ferrucio Humberto Gazzetta - Nova Odessa</p>
                    <p>{t('content.content_1')}</p>
                    <p className="text-sm">2018 - 2021</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span> HTML5, CSS3, lógica de programação</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold"> Fatec Americana "Ministro Ralph Biasi" - Americana</p>
                    <p>{t('content.content_2')}</p>
                    <p className="text-sm">2021 - 2024</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>engenharia de software, análise de sistemas, banco de dados, OOP</p> */}
                </div>

            </div>

            <div>
                <p className="font-bold text-lg">{t('content.content_5')}</p>
            </div>
            
            <div className="p-3 flex flex-wrap gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Microlins</p>
                    <p>{t('content.content_3')}</p>
                    <p className="text-sm">2017 - 2018</p>
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">American English Learning (AEL)</p>
                    <p>{t('content.content_4')}</p>
                    <p className="text-sm">2018 - 2018</p>
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Udemy</p>
                    <p>React.js, Node.js, Docker</p>
                    <p className="text-sm">2023 - YYYY</p>
                </div>

            </div>
            
        </section>
    )
}