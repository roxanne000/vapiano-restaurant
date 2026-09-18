import "./globals.css";
export const metadata = { title: "Vapiano Lounge & Restaurant - Tema" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
