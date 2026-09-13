import { Database, LineChart, Search, Scale, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Recopilación de datos",
    description:
      "Reunimos estadísticas de equipos, jugadores y mercados de distintas competiciones.",
  },
  {
    icon: LineChart,
    title: "Análisis estadístico",
    description:
      "Procesamos los datos para identificar patrones y tendencias relevantes.",
  },
  {
    icon: Search,
    title: "Detección de valor",
    description:
      "Comparamos la probabilidad estimada con la cuota ofrecida para localizar oportunidades.",
  },
  {
    icon: Scale,
    title: "Gestión del stake",
    description:
      "Asignamos el stake según el nivel de confianza, dentro de una gestión de bank disciplinada.",
  },
  {
    icon: ClipboardCheck,
    title: "Seguimiento de resultados",
    description:
      "Registramos cada análisis y su resultado para medir el rendimiento real a lo largo del tiempo.",
  },
];

export function MethodologySection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Metodología
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-muted">
            Un proceso repetible que va desde el dato en bruto hasta el
            seguimiento del resultado.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-line bg-surface p-6"
            >
              <span className="font-display text-sm text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
