import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TopBar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallAction from "@/components/CallAction";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Cobrando Online",
  description:
    "En Cobrando Online nos encargamos de la recuperación de tu cartera de manera ágil y segura",
  keywords: [
    "recuperación de cartera",
    "recuperación de cartera para empresas",
    "facturas impagadas",
    "gestión de cobros",
    "control de finanzas",
  ],
  openGraph: {
    title: "Cobrando Online",
    description:
      "En Cobrando Online nos encargamos de la recuperación de tu cartera de manera ágil y segura.",
    url: "",
    siteName: "Cobrando Online",
    images: [
      {
        url: "/logo-cobrando-online.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        {children}
        <CallAction />
        <Footer />
      </body>
    </html>
  );
}
