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
    title: "home",
    links: [
      { label: "homeCategory", href: "#categorias" },
      { label: "homeDevices", href: "#dispositivos" },
      { label: "homeFAQ", href: "#faq" },
    ],
  },
  {
    title: "movies",
    links: [
      { label: "moviesGenres", href: "#" },
      { label: "moviesTrends", href: "#" },
      { label: "moviesReleases", href: "#" },
      { label: "moviesPopular", href: "#" },
    ],
  },
  {
    title: "shows",
    links: [
      { label: "showsGenres", href: "#" },
      { label: "showsTrends", href: "#" },
      { label: "showsReleases", href: "#" },
      { label: "showsPopular", href: "#" },
    ],
  },
  {
    title: "support",
    links: [{ label: "contact-us", href: "#" }],
  },
  {
    title: "subscription",
    links: [
      { label: "subscriptionPlans", href: "#" },
      { label: "subscriptionFeatures", href: "#" },
    ],
  },
  {
    title: "contact",
    links: [
      {
        href: "https://www.linkedin.com/in/vinicius-bastos-silva",
        icon: "linkedin",
        label: "Linkedin",
      },
      {
        href: "https://www.github.com/viniciusbastos-dev",
        icon: "github",
        label: "Github",
      },
    ],
  },
];

export const devicesData = [
  {
    name: "smartphoneTitle",
    info: "smartphoneInfo",
    image: smartphone,
  },
  {
    name: "tabletTitle",
    info: "tabletInfo",
    image: tablet,
  },
  {
    name: "smartTvTitle",
    info: "smartTvInfo",
    image: smartTV,
  },
  {
    name: "laptopTitle",
    info: "laptopInfo",
    image: laptop,
  },
  {
    name: "consolesTitle",
    info: "consolesInfo",
    image: console,
  },
  {
    name: "vrTitle",
    info: "vrInfo",
    image: vr,
  },
];

export const FAQData = [
  {
    number: 1,
    questionKey: "whatIsTheMovieDictionary",
    answerKey: "whatIsTheMovieDictionaryAnswer",
  },
  {
    number: 2,
    questionKey: "howToSignUp",
    answerKey: "howToSignUpAnswer",
  },
  {
    number: 3,
    questionKey: "whichDevicesAreCompatible",
    answerKey: "whichDevicesAreCompatibleAnswer",
  },
  {
    number: 4,
    questionKey: "canIDownloadMovies",
    answerKey: "canIDownloadMoviesAnswer",
  },
  {
    number: 5,
    questionKey: "isThereAFreeTrial",
    answerKey: "isThereAFreeTrialAnswer",
  },
  {
    number: 6,
    questionKey: "canICancelSubscription",
    answerKey: "canICancelSubscriptionAnswer",
  },
  {
    number: 7,
    questionKey: "whatPaymentMethodsAreAccepted",
    answerKey: "whatPaymentMethodsAreAcceptedAnswer",
  },
  {
    number: 8,
    questionKey: "doesTheMovieDictionaryOfferSupport",
    answerKey: "doesTheMovieDictionaryOfferSupportAnswer",
  },
];
