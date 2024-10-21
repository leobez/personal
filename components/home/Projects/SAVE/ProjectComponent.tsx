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
                className={`bg-color01 p-[1px] h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col`} 
                onClick={clickFunc} 
                id={id}
            >
                <div className={`h-full w-full relative tracking-widest hover:before:content-['${name}'] text-colorText grid place-items-center text-xl`}>
                    <Image 
                        src={imgSrc} 
                        alt={name} 
                        fill={true} 
                        priority={true}
                        style={{objectFit: "cover", objectPosition: 'center'}}
                        className="hover:opacity-25 duration-200 "
                    />
                </div>


            </div>
    ) 

}