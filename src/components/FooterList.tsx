import { FooterSection } from "@/config/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";

interface Props {
  title: string;
  data: FooterSection;
}

const FooterList: React.FC<Props> = ({ title, data }) => {
  const allLinksAreIcons = data.links.every((link) => "icon" in link);
  return (
    <div className="flex flex-col gap-3 justify-self-start">
      <h3 className="font-bold mb-3 lg:text-lg xl:text-xl">{title}</h3>
      <ul
        className={`flex ${allLinksAreIcons ? "flex-row" : "flex-col"} gap-3`}
      >
        {data?.links?.map((link, index) => (
          <li key={index} className="text-gray-60">
            {link.icon ? (
              <Link href={link.href} aria-label={link.icon}>
                <div className="p-3 lg:p-4 text-white bg-black-10 border-1 border-black-15 rounded-lg hover:scale-90 duration-300 ease-in-out">
                  <Icon name={link.icon} className={"size-5 xl:size-6"} />
                </div>
              </Link>
            ) : (
              <Link
                className="hover:text-gray-75 text-sm lg:text-base xl:text-lg"
                href={link.href}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
