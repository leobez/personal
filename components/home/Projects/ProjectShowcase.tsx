'use client'

import Image from "next/image"
import { Project } from "./Projects";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import GradualText from "../AboutMe/GradualText";
import ShowcaseElement from "./ShowcaseElement";

const SECONDS=12

type Props = {
    selectedProject:Project;
}

export default function ProjectShowcase({selectedProject}:Props) {

    if (!selectedProject.showcase) {
        return;
    }

    const [currentImage, setCurrentImage] = useState<typeof selectedProject.showcase[0]>(selectedProject.showcase[0])

    useEffect(() => {

        const interval = setInterval(() => {

            if (currentImage?.id >= (Number(selectedProject.showcase?.length)-1)) {
                console.log('back to 0')
                if (!selectedProject.showcase) return;
                setCurrentImage(selectedProject.showcase[0])

            } else {
                console.log('up')
                // @ts-expect-error -> selectedProject.showcase is not null.
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
                            desc={currentImage.desc}
                        />
                        
                    </div>
                </div>

            }
        </>

    )


}