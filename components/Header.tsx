import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {

    return (
        <header className="h-24 w-full bg-[#000] sticky top-0">
            <div className="max-w-[1024px] h-full mx-auto bg-[#000] text-[#fff] p-3 flex items-center justify-between">
                <div>
                    <p className="font-bold text-lg">Leonardo de Souza Bezerra</p>
                    <p className="font-light">Personal Website</p>
                </div>
            </div>
        </header>
    )
}