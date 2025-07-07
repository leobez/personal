

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = "", id }: Props) {
  return (
    <section
      id={id}
      className={`
        w-full
        px-4 py-2
        bg-white text-black
        flex flex-col gap-6
        scroll-mt-24
        ${className}
      `}
    >
      <div className="max-w-4xl w-full mx-auto">
        {children}
      </div>
    </section>
  )
}
