import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import "swiper/swiper-bundle.css";

import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "The Movie Dictionary",
  description: "Descubra informações detalhadas sobre filmes e séries.",
  keywords: [
    "filmes",
    "séries",
    "informações sobre filmes",
    "dicionários de filmes",
    "sinopse",
    "elenco",
    "informações",
    "The Movie Dictionary",
    "MovieDictionary",
  ],
  creator: "Vinícius Bastos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="xPNE8_Rgq3mxaABEFT0rPd3WSofE7ZOwU4D1zCO7Jok"
        />
      </head>
      <SmoothScroll>
        <body className={manrope.className}>
          {children}
          <Footer />
        </body>
      </SmoothScroll>
    </html>
  );
}
