// Definindo uma interface para os links do footer
interface FooterLink {
  label: string;
  href: string;
}

// Definindo a interface para os dados do footer
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Array de dados do footer
export const FooterLinksData: FooterSection[] = [
  {
    title: "Início",
    links: [
      { label: "Categorias", href: "/categorias" },
      { label: "Dispositivos", href: "/dispositivos" },
      { label: "Preços", href: "/precos" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Filmes",
    links: [
      { label: "Gêneros", href: "/generos-filmes" },
      { label: "Tendências", href: "/tendencias-filmes" },
      { label: "Lançamentos", href: "/lancamentos-filmes" },
      { label: "Popular", href: "/populares-filmes" },
    ],
  },
  {
    title: "Shows",
    links: [
      { label: "Gêneros", href: "/generos-shows" },
      { label: "Tendências", href: "/tendencias-shows" },
      { label: "Lançamentos", href: "/lancamentos-shows" },
      { label: "Popular", href: "/populares-shows" },
    ],
  },
  {
    title: "Suporte",
    links: [{ label: "Contate-nos", href: "/contato" }],
  },
  {
    title: "Inscrição",
    links: [
      { label: "Planos", href: "/planos" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    title: "Conecte-se conosco",
    links: [
      { label: "Planos", href: "/planos" },
      { label: "Features", href: "/features" },
    ],
  },
];
