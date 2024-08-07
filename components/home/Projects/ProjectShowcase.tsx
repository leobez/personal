'use client'

import { Project, ShowCaseDesc } from "./types";
import { useEffect, useState } from "react";
import ShowcaseElement from "./ShowcaseElement";

const SECONDS=10

type Props = {
    selectedProject:Project;
    showcaseContent:ShowCaseDesc[]
}

export default function ProjectShowcase({
    selectedProject, 
    showcaseContent
}:Props) {

    const [currentImage, setCurrentImage] = useState<typeof selectedProject.showcase[0]>(selectedProject.showcase[0])

    //console.log('showcaseContent: ', showcaseContent)

    useEffect(() => {

        const interval = setInterval(() => {

            if (currentImage?.id >= (Number(selectedProject.showcase?.length)-1)) {
                //console.log('back to 0')
                if (!selectedProject.showcase) return;
                setCurrentImage(selectedProject.showcase[0])

            } else {
                //console.log('up')
                setCurrentImage(prev => selectedProject.showcase[prev.id+1])
            }

        }, SECONDS*1000)

        return () => clearInterval(interval)

    }, [currentImage])

    return (
        <>
            {currentImage && 

                <div>
                    <div className="h-[400px] w-full relative bg-black overflow-hidden">

                        <ShowcaseElement
                            image_src={currentImage.image_src}
                            desc={showcaseContent[currentImage.id].text}
                        /> 
                        
                    </div>
                </div>

            }
        </>

    )


}