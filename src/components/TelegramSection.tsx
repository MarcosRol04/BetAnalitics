import { Send, MessageCircle } from "lucide-react";
import { TELEGRAM_URL } from "../config/constants";

export function TelegramSection() {
  return (
    <section id="telegram" className="py-8 sm:py-12">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface p-8 shadow-glow sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                Recibe nuestros análisis directamente en Telegram.
              </h2>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-muted">
                Únete al canal para no perderte ningún análisis ni
                actualización.
              </p>
            </div>

            <a
              href={"https://t.me/+KqaGXLn9dahlN2E8"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-ink-onaccent transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/90 sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Unirme al canal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
