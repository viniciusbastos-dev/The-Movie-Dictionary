import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "The Movie Dictionary",
  description: "Descubra informações detalhadas sobre filmes e séries.",
  keywords:
    "filmes, séries, informações sobre filmes, dicionário de filmes, sinpose, elenco, informações",
  creator: "Vinícius Bastos",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
