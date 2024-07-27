import HiddenMenuButton from "./HiddenMenuButton";

export default function Header() {

    return (
        <header className="h-24 w-full bg-color04 sticky top-0 z-40">
            <div className="max-w-[1300px] h-full mx-auto bg-color04 text-colorText p-3 flex items-center z-30 gap-5">

                {/* HIDDEN MENU BUTTON */}
                <HiddenMenuButton/>

                <div>
                    <p className="font-bold text-lg">Leonardo de Souza Bezerra</p>
                    <p className="font-light">Portfolio</p>
                </div>
            </div>
        </header>
    )
}