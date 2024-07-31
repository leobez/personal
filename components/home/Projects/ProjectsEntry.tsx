import { useTranslations } from "next-intl";
import Projects from "./Projects";

export default function ProjectsEntry() {

    const t = useTranslations('Projects')

    console.log('t: ', t)

    return (
        <>
            <Projects content={
                {
                    title: t('title'),
                    subtitle: t('subtitle'),
                    projects: {
                        1: {
                            desc: t('projects.mediacollection.desc')
                        },
                        2: {
                            desc: t('projects.divulgacampo.desc')
                        },
                        3: {
                            desc: t('projects.seocomparison.desc')
                        },
                        4: {
                            desc: t('projects.adsprojects.desc')
                        },
                    } ,
                    linkRepo: t("linkRepo"),  
                    linkProject: t("linkProject"),                            
                }
            }/>
        </>
    )
}