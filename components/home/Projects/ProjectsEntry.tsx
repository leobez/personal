import { useTranslations } from "next-intl";
import Projects from "./Projects";

export default function ProjectsEntry() {

    const t = useTranslations('Projects')

    return (
        <div className="h-full min-h-[500px]">
            <Projects localeContent={
                {
                    title: t('title'),
                    subtitle: t('subtitle'),
                    projects: [
                        {
                            desc: t('projects.mediacollection.description'),
                            showcaseDescs: [
                                {
                                    id: t('projects.mediacollection.showcase.desc0.id'),
                                    desc: t('projects.mediacollection.showcase.desc0.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc1.id'),
                                    desc: t('projects.mediacollection.showcase.desc1.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc2.id'),
                                    desc: t('projects.mediacollection.showcase.desc2.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc3.id'),
                                    desc: t('projects.mediacollection.showcase.desc3.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc4.id'),
                                    desc: t('projects.mediacollection.showcase.desc4.desc'),
                                }
                            ]
                        },

                        {
                            desc: t('projects.divulgacampo.description'),
                            showcaseDescs: [
                                {
                                    id: t('projects.divulgacampo.showcase.desc0.id'),
                                    desc: t('projects.divulgacampo.showcase.desc0.desc'),
                                }
                            ]
                        },
                        {
                            desc: t('projects.seocomparison.description'),
                            showcaseDescs: [
                                {
                                    id: t('projects.seocomparison.showcase.desc0.id'),
                                    desc: t('projects.seocomparison.showcase.desc0.desc'),
                                }
                            ]
                        },
                        {
                            desc: t('projects.adsprojects.description'),
                            showcaseDescs: [
                                {
                                    id: t('projects.adsprojects.showcase.desc0.id'),
                                    desc: t('projects.adsprojects.showcase.desc0.desc'),
                                }
                            ]
                        },
                    ],
                    linkRepo: t("linkRepo"),  
                    linkProject: t("linkProject"),                            
                }
            }/>
        </div>
    )
}