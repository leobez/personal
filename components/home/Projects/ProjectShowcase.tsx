'use client'

import { Project, ShowCaseDesc, ShowCaseImage } from "./types";
import { useEffect, useState } from "react";
import ShowcaseElement from "./ShowcaseElement";

const SECONDS=8

type Props = {
    selectedProject:Project;
    showcaseContent:ShowCaseDesc[]
}

export default function ProjectShowcase({
    selectedProject, 
    showcaseContent
}:Props) {

    const [currentImage, setCurrentImage] = useState<ShowCaseImage>(selectedProject.showcase[0])

/*     useEffect(() => {
        console.log('currentImage:', currentImage)
    }, [currentImage])

    console.log('selectedProject: ', selectedProject) */

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

                        {currentImage.multiple_src && currentImage.multiple_src.length > 0 ? (
                            <>
                                <ShowcaseElement
                                    image_src={null}
                                    desc={showcaseContent[currentImage.id].text}
                                    multiple_src={currentImage.multiple_src}
                                /> 
                            </>
                        ) : (
                            <>
                                <ShowcaseElement
                                    image_src={currentImage.image_src}
                                    desc={showcaseContent[currentImage.id].text}
                                /> 
                            </>
                        )}


                        
                    </div>
                </div>

            }
        </>

    )


}