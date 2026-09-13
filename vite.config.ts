import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// El repositorio se publica como proyecto (no de usuario) en GitHub Pages:
// https://marcosrol04.github.io/BetAnalitics/
// Por eso 'base' NO puede ser '/': todas las rutas de assets generadas en
// dist/ deben ir precedidas de '/BetAnalitics/'.
export default defineConfig({
  base: "/BetAnalitics/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
