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
                    scale: [1.8, 1, 1.8],
                }}
                transition={{
                    times: [0, 0.5, 1],
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
                    x: ['-100%', '0%', '0%', '-100%'],
                }}
                
                transition={{
                    delay: 1,
                    times: [0, 0.03, 0.97, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                    duration: SECONDS-1,
                    ease: 'anticipate',
                }}

                className="absolute left-0 top-0 h-full w-48 bg-black opacity-90 px-5 py-4 text-white font-light"
            >
                {desc}

            </motion.div> 


        </>
    )


}