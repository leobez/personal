'use client'

import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const SECONDS=10

type Props = {
    desc:string;
    image_src:string|null;
    multiple_src?:string[];
}

/* VERIFY IF IMAGE USES ANIMATION */
const verifySpecialAnimation = (image_src?:string|null, multiple_src?:string[]|null):string[] => {

    if (image_src) {
        if (image_src.split('/').includes('cinelog')) {
            return [
                'CINELOG_IMG1',
                'CINELOG_IMG2',
                'CINELOG_IMG3',
                'CINELOG_IMG4',
                'CINELOG_IMG5',
                'CINELOG_IMG6',
            ]
        }
    }

    if (multiple_src) {
        const testString:string = multiple_src[0]
        if (testString.split('/').includes('cinelog')) {
            return [
                'CINELOG_IMG1',
                'CINELOG_IMG2',
                'CINELOG_IMG3',
                'CINELOG_IMG4',
                'CINELOG_IMG5',
                'CINELOG_IMG6',
            ]
        }
    }

    return [
        'DEFAULT'
    ]
}

export default function ShowcaseElement({image_src, desc, multiple_src}:Props) {

    const [index, setIndex] = useState<number>(1)
    const controls = useAnimationControls()
    const [cIndex, setCindex] = useState<number>(0)

    const animationList:string[] = verifySpecialAnimation(image_src, multiple_src)

    useEffect(() => {
        controls.start(animationList[cIndex])
        //console.log('current animation: ', animationList[cIndex])
    }, [cIndex])

    useEffect(() => {

        const interval = setInterval(() => {
            setCindex((prev:number) => {
                if (prev===animationList.length-1) return 0
                else return prev+1
            })
        }, SECONDS*1000)

        return () => clearInterval(interval)

    }, [cIndex])

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

                variants={{
                    
                    // CINELOG
                    CINELOG_IMG1: {
                        scale:  [1.4, 1.5, 1.5, 1.5],
                        x:      [100, 100, -80, -80],
                        y:      [0, 0, 0, -200]
                    },
                    CINELOG_IMG2: {
                        scale:  [1, 1.2, 1.2, 1.2],
                        x:      [0, 0, -60, -60],
                        y:      [0, -100, -100, -350]
                    },
                    CINELOG_IMG3: {
                        scale:  [1.3, 1.3, 1.3, 1.3],
                        x:      [0, 250, -120, -120],
                        y:      [0, -220, 0, -200]
                    },
                    CINELOG_IMG4: {
                        scale:  [1.5, 2.5, 2.5, 1.2],
                        x:      [0, 630, -20, -80],
                        y:      [0, 300, -10, -80]
                    },
                    CINELOG_IMG5: {
                        scale:  [1.2, 1.2, 1.2, 1.2],
                        y:      [0, 0, 0, 0]
                    },
                    CINELOG_IMG6: {
                        scale:  [1.8, 1.8, 1.8, 1.3],
                        x:      [0, 320, -100, -100],
                        y:      [0, -200, -200, -200]
                    },

                    // DEFAULT (ALL OTHERS FOR NOW)
                    DEFAULT: {
                        scale: [1, 1, 1, 1],
                        x: [0, 0, 0, 0],
                        y: [0, 0, 0, 0]
                    },
                }}

                animate={controls}

                transition={{
                    times: [0, 0.5, 0.75, 1],
                    duration: SECONDS,
                }}

                className="h-full w-full rounded-t-lg"
            >
            
            {/* Images */}
            { image_src ? (
                <>
                    <Image 
                        src={`${image_src}`} 
                        alt='photo' 
                        height={800}
                        width={1400}
                        priority={true}
                        style={{
                            objectFit: "cover", 
                            objectPosition: 'center', 
                            borderTopLeftRadius: '0.5rem', 
                            borderTopRightRadius: '0.5rem', 
                            opacity: '100%',
                        }}
                    />
                    
                </>
            ) : (
                <>
                { multiple_src && multiple_src.length > 0 && index &&
                <>
                    <Image 
                        src={`/images/cinelog/color-themes/color${index}.png`} 
                        alt='photo' 
                        fill={true} 
                        priority={true}
                        style={{
                            objectFit: "cover", 
                            objectPosition: 'center', 
                            borderTopLeftRadius: '0.5rem', 
                            borderTopRightRadius: '0.5rem', 
                            opacity: '100%',
                        }}
                    />
                </>

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