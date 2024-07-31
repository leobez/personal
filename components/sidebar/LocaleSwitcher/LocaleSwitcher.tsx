import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LangSwitcher() {


    const router = useRouter()
    const locale = useLocale()

    const updateLang = (e:any):void => {
        e.preventDefault()
        router.push(`/${e.target.id}`)
    }

    return (
        <div className="w-fit">

            {locale === 'en' && 
                <div className="flex rounded-3xl border-2 border-color04 ">
                    
                    <div className="w-1/2 overflow-x-hidden hover:opacity-60">
                        <button onClick={(e) => updateLang(e)} id="pt" className="py-2 px-4 text-2xl">
                            {"\u{1F1E7}\u{1F1F7}"} {/* BR */}
                        </button>
                    </div>

                    <div className="w-1/2 overflow-x-hidden">
                        <button className="py-2 px-4 text-2xl bg-color04 rounded-r-2xl" disabled>
                            {"\u{1F1FA}\u{1F1F8}"} {/* ENG */}
                        </button>
                    </div>

                </div>
            }

            {locale === 'pt' && 
                <div className="flex rounded-3xl border-2 border-color04">

                    <div className="w-1/2 overflow-x-hidden">
                        <button className="py-2 px-4 text-2xl bg-color04 rounded-l-2xl" disabled>
                            {"\u{1F1E7}\u{1F1F7}"} {/* BR */}
                        </button>
                    </div>

                    <div className="w-1/2 overflow-x-hidden hover:opacity-60">
                        <button onClick={(e) => updateLang(e)} id="en" className="py-2 px-4 text-2xl">
                            {"\u{1F1FA}\u{1F1F8}"} {/* ENG */}
                        </button>
                    </div>

                </div>
            }

        </div>
    )
}