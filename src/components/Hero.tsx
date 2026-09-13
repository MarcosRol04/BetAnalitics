import { ArrowRight, Send, TrendingUp } from "lucide-react";
import { TELEGRAM_URL } from "../config/constants";

const demoStats = [
  { label: "Acierto", value: "--" },
  { label: "Cuota media", value: "--" },
  { label: "Stake medio", value: "--" },
  { label: "ROI", value: "--" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,157,255,0.10),rgba(5,7,12,0)_70%)]"
      />

      <div className="container-content grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="max-w-xl font-display text-[2.05rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.1rem]">
            Analiza. Decide. Apuesta con criterio.
          </h1>

          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink-muted sm:text-lg">
            BetAnalitics estudia datos deportivos, mercados y cuotas para
            detectar oportunidades de valor y ayudarte a tomar decisiones
            más informadas.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#analisis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-ink-onaccent shadow-glow transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Ver análisis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-accent/40"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Unirme a Telegram
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-faint">
            +18 · Las apuestas implican riesgo. Sin garantía de resultados.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="animate-fade-up rounded-2xl border border-line bg-surface p-6 shadow-subtle">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="font-display text-sm font-medium text-ink">
                  Evolución del bank
                </span>
              </div>
              <span className="text-xs text-ink-faint">Datos de ejemplo</span>
            </div>

            <svg viewBox="0 0 280 90" className="mt-5 h-20 w-full" aria-hidden="true">
              <polyline
                points="0,70 35,60 70,64 105,45 140,50 175,30 210,36 245,18 280,22"
                fill="none"
                stroke="#4F9DFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {demoStats.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-line-subtle bg-canvas/40 px-4 py-3.5"
                >
                  <p className="text-xs text-ink-faint">{row.label}</p>
                  <p className="mt-1.5 font-display text-xl font-semibold text-ink">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[0.7rem] leading-relaxed text-ink-faint">
              Datos demostrativos sin relación con resultados reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
