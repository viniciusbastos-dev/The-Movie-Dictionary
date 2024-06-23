import smartphone from "@/assets/images/Smartphone.png";
import tablet from "@/assets/images/Tablet.png";
import smartTV from "@/assets/images/SmartTV.png";
import laptop from "@/assets/images/Laptop.png";
import console from "@/assets/images/Console.png";
import vr from "@/assets/images/VR.png";

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
export const footerLinksData: FooterSection[] = [
  {
    title: "Início",
    links: [
      { label: "Categorias", href: "#categorias" },
      { label: "Dispositivos", href: "#dispositivos" },
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

export const devicesData = [
  {
    name: "Smartphones",
    info: "O The Movie Dictionary é otimizado para smartphones Android e iOS. Baixe nosso aplicativo na Google Play Store ou na Apple App Store.",
    image: smartphone,
  },
  {
    name: "Tablet",
    info: "O The Movie Dictionary é otimizado para tablets Android e iOS. Baixe nosso aplicativo na Google Play Store ou na Apple App Store.",
    image: tablet,
  },
  {
    name: "Smart TV",
    info: "O The Movie Dictionary é compatível com Smart TVs. Baixe nosso aplicativo na loja de aplicativos da sua TV.",
    image: smartTV,
  },
  {
    name: "Laptops",
    info: "O The Movie Dictionary pode ser acessado em laptops. Acesse nosso site e desfrute de todo o conteúdo disponível.",
    image: laptop,
  },
  {
    name: "Consoles",
    info: "O The Movie Dictionary é compatível com consoles de videogame. Baixe nosso aplicativo na loja de aplicativos do seu console.",
    image: console,
  },
  {
    name: "Headsets VR",
    info: "O The Movie Dictionary oferece suporte para headsets de realidade virtual. Baixe nosso aplicativo na loja de aplicativos do seu dispositivo VR.",
    image: vr,
  },
];
