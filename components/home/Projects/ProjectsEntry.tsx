import { useTranslations } from "next-intl";
import Projects from "./Projects";

export default function ProjectsEntry() {

    const t = useTranslations('Projects')

    return (
        <div className="h-full min-h-[500px]">
            <Projects content={
                {
                    title: t('title'),
                    subtitle: t('subtitle'),
                    projects: {
                        1: {
                            desc: t('projects.mediacollection.description')
                        },
                        2: {
                            desc: t('projects.divulgacampo.description')
                        },
                        3: {
                            desc: t('projects.seocomparison.description')
                        },
                        4: {
                            desc: t('projects.adsprojects.description')
                        },
                    } ,
                    linkRepo: t("linkRepo"),  
                    linkProject: t("linkProject"),                            
                }
            }/>
        </div>
    )
}