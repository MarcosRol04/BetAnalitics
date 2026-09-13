# BetAnalitics

Landing estática (Vite + React + TypeScript + Tailwind) para BetAnalitics,
preparada para publicarse en GitHub Pages en:

`https://marcosrol04.github.io/BetAnalitics/`

Sin Next.js, sin SSR, sin backend: es una SPA 100% estática.

## Configuración

El enlace de Telegram está centralizado en **`src/config/constants.ts`**:

```ts
export const TELEGRAM_URL = "#";
```

Sustitúyelo por tu enlace real, por ejemplo `"https://t.me/betanalitics"`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` con todas las rutas de assets bajo `/BetAnalitics/`
(configurado en `vite.config.ts` con `base: '/BetAnalitics/'`).

## Previsualizar el build localmente

```bash
npm run preview
```

## Publicar en GitHub Pages

Hay dos formas, elige una:

### Opción A — GitHub Actions (automático, recomendado)

Ya incluye el workflow `.github/workflows/deploy.yml`, que compila y publica
en cada push a `main`.

1. Sube el proyecto a `https://github.com/MarcosRol04/BetAnalitics`.
2. En el repositorio: **Settings → Pages → Source → GitHub Actions**.
3. Haz push a `main`. La Action compilará y publicará `dist/` automáticamente.
4. Al cabo de un minuto la web estará en
   `https://marcosrol04.github.io/BetAnalitics/`.

### Opción B — Manual, sin Actions

```bash
npm run build
npx gh-pages -d dist
```

(la primera vez instalará `gh-pages` como dependencia temporal). Luego en
**Settings → Pages → Source**, selecciona la rama `gh-pages`.

## Notas

- Este proyecto se escribió a mano en un entorno sin acceso a red, así que
  no se pudo ejecutar `npm install` / `npm run build` aquí para verificarlo
  end-to-end. Sigue las convenciones estándar de Vite 5 + React 18 +
  Tailwind 3.4; si al ejecutarlo en tu máquina aparece algún error,
  compártelo y lo corrijo.
- No hay estadísticas ni resultados reales en ningún sitio: todo está
  marcado como "Datos de ejemplo" / "Datos demostrativos" o mostrado como `--`.
- El menú móvil bloquea el scroll del body mientras está abierto y se cierra
  al pulsar cualquier enlace.
- La tabla de resultados solo se muestra a partir de `sm` (≥640px); en móvil
  se sustituye por tarjetas apiladas para evitar scroll horizontal.
