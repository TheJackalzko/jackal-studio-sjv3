const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-encre border-t border-papier/10 pl-10 pr-5 md:pl-24 lg:pl-32 py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-2xl">
        {/* Left */}
        <div>
          <p className="font-display font-expanded text-sm text-papier tracking-widest uppercase mb-1">
            Jackal Studio
          </p>
          <p className="font-mono text-[11px] text-gris tracking-wider">
            Europe, France
          </p>
          <a
            href="mailto:admin@studiojackal.com"
            className="font-mono text-[11px] text-orange/80 tracking-wider hover:text-orange transition-colors duration-150 underline underline-offset-2 mt-0.5 inline-block"
          >
            admin@studiojackal.com
          </a>
        </div>

        {/* Right — cartouche footer */}
        <div className="font-mono text-[10px] text-gris/60 tracking-wider space-y-0.5 md:text-right">
          <p>IND. A — {YEAR}</p>
          <p>Tous droits réservés</p>
          <p className="text-gris/40">Conçu et développé par Jackal Studio</p>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="mt-8 pt-4 border-t border-papier/5 flex flex-wrap gap-4 md:gap-8">
        <a href="#" className="font-mono text-[10px] text-gris/40 hover:text-gris transition-colors duration-150 tracking-wider uppercase">
          Mentions légales
        </a>
        <a href="#" className="font-mono text-[10px] text-gris/40 hover:text-gris transition-colors duration-150 tracking-wider uppercase">
          Politique de confidentialité
        </a>
      </div>
    </footer>
  )
}
