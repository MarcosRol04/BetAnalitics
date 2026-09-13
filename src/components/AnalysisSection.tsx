import { Clock, CheckCircle2, XCircle, type LucideIcon } from "lucide-react";

type Status = "Pendiente" | "Ganada" | "Perdida";

const statusStyles: Record<Status, { icon: LucideIcon; className: string }> = {
  Pendiente: { icon: Clock, className: "text-ink-muted bg-line/40" },
  Ganada: { icon: CheckCircle2, className: "text-positive bg-positive/10" },
  Perdida: { icon: XCircle, className: "text-negative bg-negative/10" },
};

const analyses = [
  {
    event: "Equipo Local vs Equipo Visitante",
    competition: "Liga Nacional",
    market: "Más de 4.5 córners",
    odds: "1.72",
    probability: "64%",
    stake: "2/10",
    status: "Pendiente" as Status,
    roi: "--",
  },
  {
    event: "Club Norte vs Club Sur",
    competition: "Copa Regional",
    market: "Ambos anotan",
    odds: "1.85",
    probability: "58%",
    stake: "1/10",
    status: "Ganada" as Status,
    roi: "--",
  },
  {
    event: "Selección A vs Selección B",
    competition: "Torneo Amistoso",
    market: "Más de 2.5 tarjetas",
    odds: "1.65",
    probability: "61%",
    stake: "2/10",
    status: "Perdida" as Status,
    roi: "--",
  },
];

export function AnalysisSection() {
  return (
    <section id="analisis" className="py-16 sm:py-24">
      <div className="container-content">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Ejemplos de análisis
            </h2>
            <p className="mt-3 max-w-md text-ink-muted">
              Así estructuramos cada análisis: mercado, cuota, probabilidad
              estimada y gestión del stake.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-line px-3 py-1 text-xs text-ink-faint">
            Datos demostrativos
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {analyses.map((item) => {
            const status = statusStyles[item.status];
            return (
              <article
                key={item.event}
                className="flex flex-col rounded-2xl border border-line bg-surface p-6"
              >
                <p className="text-xs text-ink-faint">{item.competition}</p>
                <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-ink">
                  {item.event}
                </h3>

                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <dt className="text-ink-faint">Mercado</dt>
                    <dd className="mt-0.5 text-ink">{item.market}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint">Cuota</dt>
                    <dd className="mt-0.5 text-ink">{item.odds}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint">Probabilidad estimada</dt>
                    <dd className="mt-0.5 text-ink">{item.probability}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint">Stake</dt>
                    <dd className="mt-0.5 text-ink">{item.stake}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-faint">ROI</dt>
                    <dd className="mt-0.5 text-ink">{item.roi}</dd>
                  </div>
                </dl>

                <div
                  className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                >
                  <status.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.status}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
