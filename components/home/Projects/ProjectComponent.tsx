import Image from "next/image";

type Props = {
    clickFunc:(e:any)=>void;
    imgSrc:string;
    name:string;
    id:string;
}

export default function ProjectComponent({clickFunc, imgSrc, name, id}:Props) {

    return (
            <div 
                className="rounded-lg bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                onClick={clickFunc} 
                id={id}
            >
                <div className="h-full w-full relative rounded-lg">
                    <Image 
                        src={imgSrc} 
                        alt='photo' 
                        fill={true} 
                        style={{objectFit: "cover", objectPosition: 'center', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}
                    />
                </div>

                <div className="h-12 w-full px-3 bg-color03 flex items-center rounded-b-lg">
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                        {name}
                    </p>
                </div>

            </div>
    ) 

}