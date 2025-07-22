'use client'

export default function Overlay() {

    const handleClick = (e:any):void => {
        e.preventDefault()
        const hiddenSidebar = document.querySelector('#hiddenSidebar')
        const Overlay = document.querySelector('#overlay')
        hiddenSidebar?.classList.toggle('hidden')
        Overlay?.classList.toggle('hidden')
    }

    return (
        <div className="xl:hidden hidden h-screen w-full fixed top-0 left-0 bg-color02 z-20 overlay_in" id="overlay" onClick={handleClick}/>
    )
}