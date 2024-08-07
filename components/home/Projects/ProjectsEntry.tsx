import { useTranslations } from "next-intl";
import Projects from "./Projects";

export default function ProjectsEntry() {

    const t = useTranslations('Projects')

    return (

        <div className="h-full min-h-[500px]">

            <Projects localeContent={

                {
                    l_title: t('title'),

                    l_subtitle: t('subtitle'),

                    l_projects: [
                        // ads-content
                        {
                            projectDesc: t('projects.adsprojects.description'),
                            showcaseDesc: [
                                {
                                    id: t('projects.adsprojects.showcase.desc0.id'),
                                    text: t('projects.adsprojects.showcase.desc0.desc'),
                                }
                            ]
                        },

                        // divulgacampo
                        {
                            projectDesc: t('projects.divulgacampo.description'),
                            showcaseDesc: [
                                {
                                    id: t('projects.divulgacampo.showcase.desc0.id'),
                                    text: t('projects.divulgacampo.showcase.desc0.desc'),
                                }
                            ]
                        },

                        // seo-comparison
                        {
                            projectDesc: t('projects.seocomparison.description'),
                            showcaseDesc: [
                                {
                                    id: t('projects.seocomparison.showcase.desc0.id'),
                                    text: t('projects.seocomparison.showcase.desc0.desc'),
                                }
                            ]
                        },
                        
                        // media-collection
                        {
                            projectDesc: t('projects.mediacollection.description'),
                            showcaseDesc: [
                                {
                                    id: t('projects.mediacollection.showcase.desc0.id'),
                                    text: t('projects.mediacollection.showcase.desc0.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc1.id'),
                                    text: t('projects.mediacollection.showcase.desc1.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc2.id'),
                                    text: t('projects.mediacollection.showcase.desc2.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc3.id'),
                                    text: t('projects.mediacollection.showcase.desc3.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc4.id'),
                                    text: t('projects.mediacollection.showcase.desc4.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc5.id'),
                                    text: t('projects.mediacollection.showcase.desc5.desc'),
                                },
                                {
                                    id: t('projects.mediacollection.showcase.desc6.id'),
                                    text: t('projects.mediacollection.showcase.desc6.desc'),
                                }
                            ]
                        },






                    ],

                    l_linkRepo: t("linkRepo"),  
                    
                    l_linkProject: t("linkProject"),                            
                }
            }/>

        </div>
    )
}