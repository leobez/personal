import { HiMiniComputerDesktop } from "react-icons/hi2";

export default function SectionDivider() {
  return (
    <div className="relative my-10 flex items-center justify-center">
      <div className="absolute w-full h-px bg-black opacity-80" />
      <div className="relative bg-white px-4 text-black text-sm flex items-center gap-2">
        <HiMiniComputerDesktop/>
        Léo B.
        <HiMiniComputerDesktop/>
      </div>
    </div>
  )
}
