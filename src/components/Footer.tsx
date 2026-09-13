import { Send } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, SITE_DESCRIPTION, TELEGRAM_URL } from "../config/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-subtle py-10">
      <div className="container-content">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <Logo className="justify-center sm:justify-start" />
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <nav
            aria-label="Enlaces de BetAnalitics"
            className="flex flex-col items-center gap-3 sm:items-start"
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
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              Telegram
            </a>
          </nav>
        </div>

        <div className="mt-8 rounded-2xl border border-line-subtle bg-surface/50 px-5 py-4 text-center text-xs leading-relaxed text-ink-faint sm:text-left">
          Las apuestas deportivas implican riesgo. Los análisis mostrados no
          garantizan resultados. Apuesta siempre de forma responsable. +18.
        </div>

        <p className="mt-6 text-center text-xs text-ink-faint sm:text-left">
          © {year} BetAnalitics. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
