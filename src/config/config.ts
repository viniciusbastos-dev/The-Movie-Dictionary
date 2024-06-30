import smartphone from "@/assets/images/Smartphone.png";
import tablet from "@/assets/images/Tablet.png";
import smartTV from "@/assets/images/SmartTV.png";
import laptop from "@/assets/images/Laptop.png";
import console from "@/assets/images/Console.png";
import vr from "@/assets/images/VR.png";
import React, { ReactNode } from "react";
import { GitHubIcon } from "@/assets/SVG";

// Definindo uma interface para os links do footer
interface FooterLink {
  label?: string;
  href: string;
  icon?: "linkedin" | "github";
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
      {
        href: "https://www.linkedin.com/in/vinicius-bastos-silva",
        icon: "linkedin",
      },
      {
        href: "https://www.github.com/viniciusbastos-dev",
        icon: "github",
      },
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

export const FAQData = [
  {
    id: 1,
    question: "O que é o The Movie Dictionary?",
    answer:
      "O The Movie Dictionary é um site que permite ver informações sobre filmes e séries.",
  },
  {
    id: 2,
    question: "Como posso me inscrever no The Movie Dictionary?",
    answer:
      "Você pode se inscrever no The Movie Dictionary acessando nosso site e seguindo as instruções de inscrição.",
  },
  {
    id: 3,
    question: "Quais dispositivos são compatíveis com o The Movie Dictionary?",
    answer:
      "O The Movie Dictionary é compatível com computadores, smartphones, tablets e smart TVs.",
  },
  {
    id: 4,
    question: "Posso baixar filmes e programas para assistir offline?",
    answer:
      "Não, o The Movie Dictionary não permite o download de filmes e programas para assistir offline. Ele é apenas para ver informações.",
  },
  {
    id: 5,
    question: "Há um período de teste gratuito?",
    answer:
      "Sim, oferecemos um período de teste gratuito de 7 dias para novos usuários.",
  },
  {
    id: 6,
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta.",
  },
  {
    id: 7,
    question: "Quais são os métodos de pagamento aceitos?",
    answer:
      "Aceitamos diversos métodos de pagamento, incluindo cartões de crédito e débito, PayPal e outros.",
  },
  {
    id: 8,
    question: "O The Movie Dictionary oferece suporte ao cliente?",
    answer:
      "Sim, nosso suporte ao cliente está disponível 24/7 para ajudá-lo com qualquer dúvida ou problema.",
  },
];
