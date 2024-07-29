'use client'

import { useEffect, useState } from "react"

type Props = {
    text:string;
    classNames:string;
    preHeight:string;
    ms:number;
}

export default function GradualText({text, classNames, preHeight, ms}:Props) {

    const [gradualText, setGradualText] = useState<string[]>([]) 
    const [mounted, setMounted] = useState<boolean>(false) 

    useEffect(() => {

        const sleep = (ms:number) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const asyncSetGradualText = async() => {
            for (let a=0; a<text.length; a++) {
                
                let stringToAdd = []

                for (let b=0; b<=a; b++) {
                    stringToAdd.push(text[b])
                }

                setGradualText(stringToAdd)
                await sleep(ms)
            }
        }

        asyncSetGradualText()

        setMounted(true)

    }, [text])


    if (!mounted) {
        return (
            <p className={`h-[${preHeight}]`}>
            </p>
        )
    }

    return (
        <p className={`${classNames}`}>
            {gradualText.join('')}
        </p>
    )
}