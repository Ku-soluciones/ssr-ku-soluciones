import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "KU Soluciones | Desarrollo Web y Software Personalizado",
    template: "%s | KU Soluciones",
  },
  description: "Agencia de desarrollo web y software personalizado. Creamos soluciones digitales innovadoras para impulsar tu negocio.",
  keywords: ["desarrollo web", "software personalizado", "aplicaciones web", "diseño web", "Chile"],
  authors: [{ name: "KU Soluciones" }],
  creator: "KU Soluciones",
  publisher: "KU Soluciones",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://ku-soluciones.cl",
    siteName: "KU Soluciones",
    title: "KU Soluciones | Desarrollo Web y Software Personalizado",
    description: "Agencia de desarrollo web y software personalizado. Creamos soluciones digitales innovadoras para impulsar tu negocio.",
    images: [
      {
        url: "https://ku-soluciones.cl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KU Soluciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KU Soluciones | Desarrollo Web y Software Personalizado",
    description: "Agencia de desarrollo web y software personalizado.",
    creator: "@kusoluciones",
    images: ["https://ku-soluciones.cl/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
