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
                    <p>{t('educations.education1.desc')}</p>
                    <p className="text-sm">2018 - 2021</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span> HTML5, CSS3, lógica de programação</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2">
                    <p className="font-bold"> Fatec Americana "Ministro Ralph Biasi" - Americana</p>
                    <p>{t('educations.education2.desc')}</p>
                    <p className="text-sm">2021 - 2024</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>engenharia de software, análise de sistemas, banco de dados, OOP</p> */}
                </div>

            </div>

            <div>
                <p className="font-bold text-lg">{t('title2')}</p>
            </div>
            
            <div className="p-3 flex flex-wrap gap-3">

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Microlins</p>
                    <p>{t('educations.education3.desc')}</p>
                    <p className="text-sm">2017 - 2018</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>Office 365, informática</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">American English Learning (AEL)</p>
                    <p>{t('educations.education4.desc')}</p>
                    <p className="text-sm">2018 - 2018</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>inglês</p> */}
                </div>

                <div className="bg-color03 p-3 rounded-lg shadow-md font-light flex flex-col gap-2 w-fit">
                    <p className="font-bold">Udemy</p>
                    <p>{t('educations.education5.desc')}</p>
                    <p className="text-sm">2023 - ....</p>
                    {/* <p className="text-sm"><span className="font-bold">Competências:</span>Competências: JavaScript, React.js, Node.js, Express.js, MySQL</p> */}
                </div>

            </div>
            
        </section>
    )
}