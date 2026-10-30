import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-titanium/10 bg-noir">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-light tracking-tight">
              Lugano<span className="text-crimson">·</span>Auto
            </p>
            <p className="text-titanium/50 mt-6 max-w-md text-sm leading-relaxed">
              Performance &amp; Heritage. Portale flagship per vetture ultra-luxury
              e high-performance nel cuore del Canton Ticino.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-titanium/40 mb-6">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/showroom"
                  className="text-titanium/70 hover:text-titanium transition-colors"
                >
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  href="/configurator"
                  className="text-titanium/70 hover:text-titanium transition-colors"
                >
                  Configuratore
                </Link>
              </li>
              <li>
                <Link
                  href="/heritage"
                  className="text-titanium/70 hover:text-titanium transition-colors"
                >
                  Heritage
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-titanium/40 mb-6">
              Visita
            </p>
            <ul className="space-y-3 text-sm text-titanium/60">
              <li>Via Nassa 1</li>
              <li>6900 Lugano, CH</li>
              <li>+41 91 000 00 00</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-titanium/40 mb-6">
              Contatti
            </p>
            <ul className="space-y-3 text-sm text-titanium/60">
              <li>concierge@luganoauto.ch</li>
              <li>Lun – Sab · 9–19</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-titanium/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-titanium/30">
          <p>© {new Date().getFullYear()} Lugano Auto SA — Switzerland</p>
          <p>Dark Luxury · Titanium Edition</p>
        </div>
      </div>
    </footer>
  );
}