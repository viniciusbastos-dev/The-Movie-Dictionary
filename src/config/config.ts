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
      { label: "Categorias", href: "#" },
      { label: "Dispositivos", href: "#" },
      { label: "Preços", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Filmes",
    links: [
      { label: "Gêneros", href: "#" },
      { label: "Tendências", href: "#" },
      { label: "Lançamentos", href: "#" },
      { label: "Popular", href: "#" },
    ],
  },
  {
    title: "Shows",
    links: [
      { label: "Gêneros", href: "#" },
      { label: "Tendências", href: "#" },
      { label: "Lançamentos", href: "#" },
      { label: "Popular", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [{ label: "Contate-nos", href: "#" }],
  },
  {
    title: "Inscrição",
    links: [
      { label: "Planos", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
  {
    title: "Conecte-se conosco",
    links: [
      { label: "Planos", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
];
