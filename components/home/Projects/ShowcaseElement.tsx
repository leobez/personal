import Image from "next/image"
import { motion } from "framer-motion";

const SECONDS=12

type Props = {
    image_src:string;
    desc:string;
}

export default function ShowcaseElement({image_src, desc}:Props) {

    return (
        <>

            <motion.div
                animate={{
                    scale: [1.8, 1],
                }}
                transition={{
                    duration: SECONDS,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="h-full w-full rounded-t-lg"
            >

                <Image 
                    src={`${image_src}`} 
                    alt='photo' 
                    fill={true} 
                    style={{
                        objectFit: "cover", 
                        objectPosition: 'center', 
                        borderTopLeftRadius: '0.5rem', 
                        borderTopRightRadius: '0.5rem', 
                        opacity: '100%',
                    }}
                />
                
            </motion.div>

            <motion.div 

                animate={{
                    x: ['-100%', '0%'],
                    display: ['none', 'block']
                }}

                transition={{
                    delay: 2,
                    duration: 0.5,
                    ease: 'anticipate',
                }}

                className="absolute bottom-0 w-full bg-black opacity-90 px-5 py-4 text-white font-light"
            >
                {desc}

            </motion.div>

        </>
    )


}