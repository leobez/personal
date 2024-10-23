import { useTranslations } from "next-intl";
import Projects from "./Projects";

export default function ProjectsEntry() {

    const t = useTranslations('Projects')

    return (

        <div className="h-full min-h-[500px]">

            <Projects content={

                {
                    title: t("title"),
            
                    projects: [
                        {
                            description: t("projects.cinelog.description")
                        },
                        {
                            description: t("projects.divulgacampo.description")
                        },
                        {
                            description: t("projects.seocomparison.description")
                        },
                        {
                            description: t("projects.vmmonitor.description")
                        },
                        {
                            description: t("projects.chatmqtt.description")
                        }
                    ]                     
                }
            }/>

        </div>
    )
}