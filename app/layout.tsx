import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderSection } from "../components/HeaderSection";
import { useHeaderData } from "../hooks/useHeaderData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mikael Cauã | Desenvolvedor Front-end e Mobile",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Desenvolvedor de software com foco em front-end e mobile.",
  authors: [{ name: "Mikael Cauã", url: "https://mikael-dev.com.br" }],
  metadataBase: new URL("https://mikael-dev.com.br"),
  openGraph: {
    title: "Mikael Cauã | Desenvolvedor Front-end e Mobile",
    description: "Projetos e experiências de Mikael Cauã, desenvolvedor front-end e mobile.",
    url: "https://mikael-dev.com.br",
    siteName: "Portfólio de Mikael Cauã | Desenvolvedor Front-end e Mobile",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = useHeaderData();
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderSection {...headerData} />
        {children}
      </body>
    </html>
  );
}
