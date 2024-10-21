import AnimatedPool from "./AnimatedPool";
import { useTranslations } from "next-intl";

export default function Competences() {

    const t = useTranslations('Competences')

    return (
        <section className="bg-color01 p-4 rounded-lg shadow-lg flex flex-col gap-3 max-w-full">

            <div>
                <p className="font-bold text-lg">{t('title')}</p>
            </div>

            <div className="flex md:flex-row flex-col justify-between">

                <div className="p-3 gap-3 grid md:w-1/2 md:grid-cols-1 w-full sm:grid-cols-2 grid-cols-1">

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">

                        <p className="font-bold">{t('technologies')}</p>

                        <ul className="list-disc pl-6 pt-2">
                            <li>JavaScript, React.js, Next.js, Node.js;</li>
                            <li>Java;</li>
                            <li>CSS, Tailwind CSS;</li>
                            <li>HTML;</li>
                            <li>SQL, MySQL;</li>
                            <li>Git, Github;</li>
                            <li>Docker.</li>
                        </ul>
                    </div>

                    <div className="bg-color03 p-3 rounded-lg shadow-md font-light">
                        <p className="font-bold">{t('langs.title')}</p>
                        <ul className="list-disc pl-6 pt-2">
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