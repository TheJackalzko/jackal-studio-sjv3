'use client'

const YEAR = new Date().getFullYear()

const FIELDS = [
  ['PROJET', 'JACKAL STUDIO'],
  ['STUDIO', 'MÂCON, FR'],
  ['ÉCH.', '1:1'],
  ['DATE', YEAR.toString()],
  ['IND.', 'A'],
] as const

interface CartoucheProps {
  compact?: boolean
}

export function Cartouche({ compact = false }: CartoucheProps) {
  return (
    <div
      className={`border border-encre font-mono ${compact ? 'text-[10px]' : 'text-xs'} inline-block`}
    >
      {FIELDS.map(([label, value], i) => (
        <div
          key={label}
          className={`grid grid-cols-2 ${i < FIELDS.length - 1 ? 'border-b border-encre' : ''}`}
        >
          <span
            className={`${compact ? 'px-2 py-1' : 'px-3 py-1.5'} border-r border-encre text-gris tracking-widest`}
          >
            {label}
          </span>
          <span className={`${compact ? 'px-2 py-1' : 'px-3 py-1.5'} text-encre tracking-wider`}>
            {value}
          </span>
        </div>
      ))}
    </div>
  )
}
