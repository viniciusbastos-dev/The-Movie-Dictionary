import type { Metadata } from "next";
import GlobalStyles from "./ui/styles/GlobalStyles";
import Providers from "./lib/providers";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-DMSans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Movie Dictionary",
  description: "Veja detalhes dos seus programas e filmes favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={DMSans.className}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
