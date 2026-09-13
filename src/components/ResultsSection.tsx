import { CheckCircle2, XCircle } from "lucide-react";

const results = [
  {
    event: "Equipo Local vs Equipo Visitante",
    market: "+5.5 córners",
    odds: "1.80",
    stake: "2",
    won: true,
  },
  {
    event: "Club Norte vs Club Sur",
    market: "+2.5 tarjetas",
    odds: "1.70",
    stake: "1",
    won: false,
  },
  {
    event: "Selección A vs Selección B",
    market: "Equipo +0.5 goles",
    odds: "1.55",
    stake: "2",
    won: true,
  },
  {
    event: "Equipo Este vs Equipo Oeste",
    market: "Menos de 3.5 córners",
    odds: "1.90",
    stake: "1",
    won: true,
  },
];

function ResultBadge({ won }: { won: boolean }) {
  return won ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-positive/10 px-2.5 py-1 text-xs font-medium text-positive">
      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
      Ganada
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-negative/10 px-2.5 py-1 text-xs font-medium text-negative">
      <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
      Perdida
    </span>
  );
}

export function ResultsSection() {
  return (
    <section id="resultados" className="py-16 sm:py-24">
      <div className="container-content">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Resultados históricos
            </h2>
            <p className="mt-3 max-w-md text-ink-muted">
              Un registro de ejemplo del histórico de análisis publicados.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-line px-3 py-1 text-xs text-ink-faint">
            Datos demostrativos
          </span>
        </div>

        {/* Tabla: solo a partir de sm, para evitar scroll horizontal en móvil */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-line sm:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-surface text-ink-faint">
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Evento
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Mercado
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Cuota
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Stake
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr
                  key={row.event}
                  className={i !== results.length - 1 ? "border-b border-line-subtle" : ""}
                >
                  <td className="px-5 py-4 text-ink">{row.event}</td>
                  <td className="px-5 py-4 text-ink-muted">{row.market}</td>
                  <td className="px-5 py-4 text-ink-muted">{row.odds}</td>
                  <td className="px-5 py-4 text-ink-muted">{row.stake}</td>
                  <td className="px-5 py-4">
                    <ResultBadge won={row.won} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards: en móvil, sin tabla ni scroll horizontal */}
        <div className="mt-10 flex flex-col gap-3 sm:hidden">
          {results.map((row) => (
            <div
              key={row.event}
              className="rounded-2xl border border-line bg-surface p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-ink">{row.event}</p>
                <ResultBadge won={row.won} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-ink-faint">Mercado</p>
                  <p className="mt-0.5 text-ink-muted">{row.market}</p>
                </div>
                <div>
                  <p className="text-ink-faint">Cuota</p>
                  <p className="mt-0.5 text-ink-muted">{row.odds}</p>
                </div>
                <div>
                  <p className="text-ink-faint">Stake</p>
                  <p className="mt-0.5 text-ink-muted">{row.stake}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
