import type { Metadata } from "next";
import "../globals.css";
import { Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import "swiper/swiper-bundle.css";
import { NextIntlClientProvider } from "next-intl";

import SmoothScroll from "@/components/SmoothScroll";
import { getLocale, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html>
      <head>
        <meta
          name="google-site-verification"
          content="xPNE8_Rgq3mxaABEFT0rPd3WSofE7ZOwU4D1zCO7Jok"
        />
      </head>
      <SmoothScroll>
        <body className={manrope.className}>
          <NextIntlClientProvider messages={messages}>
            {children}

            <Footer />
          </NextIntlClientProvider>
        </body>
      </SmoothScroll>
    </html>
  );
}
