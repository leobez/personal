import Sidebar from "./Sidebar";

export default function HiddenSidebar() {

    return (
        <div className="xl:hidden hidden bg-color03 fixed top-0 left-0 h-screen w-[300px] z-30 animate-fade-right animate-duration-100 overflow-y-auto" id="hiddenSidebar">
            
            <span className="h-[100px] block"/>

            <Sidebar/>

        </div>
    )
}