import LangSwitcher from "./LangSwitcher";
import ThemeSelector from "./ThemeSelector";

export default function Sidebar() {

    return (
        <div className="flex flex-col gap-3">
            {/* THEME SELECTOR */}
            <ThemeSelector/>

            {/* LANG SELECTOR */}
            {/* <LangSwitcher/> */}

            {/* SUMMARY */}
        </div>
    )
}