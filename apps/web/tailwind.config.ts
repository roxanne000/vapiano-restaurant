import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { primary: "#0F172A", gold: { DEFAULT: "#C9A227", light: "#D4AF37" } } } } };
export default config;
