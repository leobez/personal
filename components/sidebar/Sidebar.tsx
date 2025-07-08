import ThemeSelectorEntry from "./ThemeSelector/ThemeSelectorEntry";
import SummaryEntry from "./Summary/NavEntry";

export default function Sidebar() {  

    return (
        <div className="flex flex-col gap-3 bg-color02 p-3 rounded-lg h-full">
            
            <div className="flex gap-3 w-full">

                {/* THEME SELECTOR */}
                <ThemeSelectorEntry/>

            </div>
            
            <div className="w-full">
                <SummaryEntry/>
            </div>

        </div>
    )
}