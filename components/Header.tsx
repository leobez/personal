import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {

    return (
        <header className="h-24 w-full p-1 bg-color04">
            <div className="max-w-[1024px] h-full mx-auto">
                Header
                <ThemeSwitcher/>
            </div>
        </header>
    )
}