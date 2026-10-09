import type { Metadata, Viewport } from "next";
import "./globals.css";
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
  title: "Arquitectura sostenible | Anteproyecto Cesar",
  description:
    "Anteproyecto de Luis Felipe Mora Lobo, Maestría en Ingeniería de Software. Arquitectura de referencia para información turística territorial.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

