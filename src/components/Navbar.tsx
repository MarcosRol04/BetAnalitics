import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "../config/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-subtle bg-canvas/85 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between">
        <a href="#inicio" className="shrink-0" onClick={closeMenu}>
          <Logo />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#analisis"
          className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-onaccent transition-colors hover:bg-accent/90 md:inline-flex"
        >
          Ver análisis
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line-subtle bg-canvas px-4 pb-6 pt-2 md:hidden"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-line-subtle py-3.5 text-base text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#analisis"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-ink-onaccent"
          >
            Ver análisis
          </a>
        </div>
      )}
    </header>
  );
}
