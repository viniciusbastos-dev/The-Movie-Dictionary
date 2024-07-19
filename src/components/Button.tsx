import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

// Propriedades comuns para todos os botões
interface CommonProps {
  text: string;
}

// Propriedades para um botão sem link
interface ButtonWithoutLink
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  link?: undefined;
  href?: never;
}

// Propriedades para um botão com link
interface ButtonWithLink
  extends CommonProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  link: true;
  href: string;
}

// Tipo condicional que pode ser um dos dois
type Props = ButtonWithoutLink | ButtonWithLink;

const Button: React.FC<Props> = ({ className, text, link, href, ...rest }) => {
  return link && href ? (
    <Link
      href={href}
      className={cn(
        "bg-red-45 py-3 px-5 lg:py-4 lg:px-6 text-csm rounded-lg font-semibold",
        className
      )}
    >
      {text}
    </Link>
  ) : (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={cn(
        "bg-red-45 py-3 px-5 lg:py-4 lg:px-6 text-csm rounded-lg font-semibold",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
