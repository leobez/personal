import AnimatedPool from "./AnimatedPool";
import { useTranslations } from "next-intl";

export default function Competences() {

    const t = useTranslations('Competences')

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 scroll-mt-[100px] max-w-full" id="competence">

            <div>
                <p className="font-bold text-lg">{t('title')}</p>
            </div>

            <div className="flex md:flex-row flex-col">

                <div className="p-3 gap-3 grid md:w-1/2 md:grid-cols-1 w-full sm:grid-cols-2 grid-cols-1">

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">
                        <p className="font-bold">Front-end</p>
                        <ul className="list-disc pl-6">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">
                        <p className="font-bold">Back-end</p>
                        <ul className="list-disc pl-6">
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>Express.js</li>
                        </ul>
                    </div>

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">
                        <p className="font-bold">{t('bd')}</p>
                        <ul className="list-disc pl-6">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                        </ul>
                    </div>

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">
                        <p className="font-bold">{t('tools')}</p>
                        <ul className="list-disc pl-6">
                            <li>Git</li>
                            <li>Github</li>
                            <li>Office 365</li>
                        </ul>
                    </div>

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">
                        <p className="font-bold">{t('langs.title')}</p>
                        <ul className="list-disc pl-6">
                            <li>{t('langs.lang1')}</li>
                            <li>{t('langs.lang2')}</li>
                        </ul>
                    </div>

                </div>

                <AnimatedPool/>

            </div>



        </section>
    )
}