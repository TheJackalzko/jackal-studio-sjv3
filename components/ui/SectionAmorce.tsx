interface SectionAmorceProps {
  code: string
  className?: string
}

export function SectionAmorce({ code, className = '' }: SectionAmorceProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <div className="w-4 md:w-10 h-px bg-orange flex-shrink-0" />
      <span className="font-mono text-[11px] tracking-[0.25em] text-orange uppercase">
        {code}
      </span>
    </div>
  )
}
