import Image from "next/image";

export default function Footer() {

    return (
        <footer className={`h-36 w-full bg-color04 text-colorText z-30`}>
            <div className="max-w-[1250px] h-full mx-auto flex items-center gap-3 p-3">
                <div className="h-fit w-fit">
                    <Image 
                        src={`/gifs/bonfire.gif`} 
                        unoptimized={true} 
                        alt='bonfire.gif' 
                        height={100}
                        width={100}
                        style={{objectFit: "cover", borderRadius: "0.5rem"}}
                    />
                </div>
                <div>
                    <p className="font-bold text-lg">Leonardo de Souza Bezerra</p>
                    <p className="font-light">Portfolio</p>
                </div>
            </div>
        </footer>
    )
}