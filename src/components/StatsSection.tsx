import { Percent, Target, Database, Wallet, Coins } from "lucide-react";

const stats = [
  { icon: Percent, label: "ROI", value: "--" },
  { icon: Target, label: "Acierto", value: "--" },
  { icon: Database, label: "Apuestas analizadas", value: "--" },
  { icon: Wallet, label: "Beneficio", value: "--" },
  { icon: Coins, label: "Stake medio", value: "--" },
];

export function StatsSection() {
  return (
    <section id="estadisticas" className="py-16 sm:py-24">
      <div className="container-content">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Estadísticas del seguimiento
            </h2>
            <p className="mt-3 max-w-md text-ink-muted">
              Un resumen del rendimiento agregado de los análisis publicados.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-line px-3 py-1 text-xs text-ink-faint">
            Datos de ejemplo
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <stat.icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="mt-4 font-display text-2xl font-semibold text-ink">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
