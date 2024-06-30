import React from "react";

import { LinkedinIcon, GitHubIcon } from "@/assets/SVG";
import { type ClassValue } from "clsx";

interface Props {
  name: "github" | "linkedin";
  className: ClassValue[] | string;
}

const Icon: React.FC<Props> = ({ name, className }) => {
  const renderIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <LinkedinIcon className={className} />;
      case "github":
        return <GitHubIcon className={className} />;
      // Adicione mais casos conforme necessário
      default:
        return null; // ou um ícone padrão
    }
  };

  return <>{renderIcon(name)}</>;
};

export default Icon;
