'use client'

import Image from "next/image"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SECONDS=10

type Props = {
    desc:string;
    image_src:string|null;
    multiple_src?:string[];
}


export default function ShowcaseElement({image_src, desc, multiple_src}:Props) {

    const [index, setIndex] = useState<number>(1)

    /* Is there is multiple_src, that will trigger a rapid change of each image */
    useEffect(() => {
        
        if (!multiple_src) return;

        const interval = setInterval(() => {

            if (!multiple_src) return;

            setIndex((prev:number) => {
                if (prev === 5) return 1
                else return prev+1
            })

        }, (SECONDS*400)/multiple_src?.length)

        return () => clearInterval(interval)

    }, [index, multiple_src])

    return (
        <>
            {/* Image wrappers */}
            <motion.div

                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: ['-5%', '0', '5%']
                    }}

                    transition={{
                        times: [0, 0.5, 1],
                        duration: SECONDS,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}

                className="h-full w-full rounded-t-lg"
            >
            
            {/* Images */}
            { image_src ? (
                <Image 
                    src={`${image_src}`} 
                    alt={`${image_src}`} 
                    fill={true}
                    style={{
                        objectFit: "cover", 
                        objectPosition: 'center', 
                        borderTopLeftRadius: '0.5rem', 
                        borderTopRightRadius: '0.5rem', 
                        opacity: '100%',
                    }}
                />
            ) : (
                <>
                    { multiple_src && multiple_src.length > 0 && index &&
                        <Image 
                            src={`/images/cinelog/color-themes/color${index}.png`} 
                            alt={`/images/cinelog/color-themes/color${index}.png`}
                            fill={true}
                            style={{
                                objectFit: "cover", 
                                objectPosition: 'center', 
                                borderTopLeftRadius: '0.5rem', 
                                borderTopRightRadius: '0.5rem', 
                                opacity: '100%',
                            }}
                        />
                    }
                </>
            )}
                
            </motion.div>
            
            {/* Image description */}
            <motion.div 

                animate={{
                    x: ['-100%', '0%', '0%', '-100%'],
                }}
                
                transition={{
                    delay: 0.7,
                    times: [0, 0.03, 0.97, 1],
                    repeat: Infinity,
                    repeatDelay: 0.7,
                    duration: SECONDS-0.7,
                    ease: 'anticipate',
                }}

                className="absolute left-0 top-0 h-full w-52 bg-black opacity-90 px-5 py-4 text-white font-bold text-lg grid place-items-center"
            >
                {desc}

            </motion.div> 

        </>
    )


}