import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#09090b", // Preto Profundo
          secondary: "#ffffff", // Branco Puro
          accent: "#eab308", // Dourado (Identidade)
          muted: "#71717a", // Cinza Texto
        },
        // PALETA VOGUE (Alto Contraste para Gráficos)
        vogue: {
          blue: "#1e3a8a", // Azul Real Profundo
          red: "#b91c1c", // Vermelho Rubi
          green: "#15803d", // Verde Esmeralda
          orange: "#c2410c", // Laranja Queimado
          dark: "#18181b", // Quase preto
        },
        surface: {
          background: "#f4f4f5", // Cinza Gelo (Fundo Geral)
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
