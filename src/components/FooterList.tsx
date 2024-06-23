import { FooterSection } from "@/config/config";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  data: FooterSection;
}

const FooterList: React.FC<Props> = ({ title, data }) => {
  return (
    <ul className="flex flex-col gap-3 justify-self-start">
      <li className="font-bold mb-3 lg:text-lg xl:text-xl">{title}</li>
      {data?.links?.map((link, index) => (
        <li key={index} className="text-gray-60 ">
          <Link
            className="hover:text-gray-75 text-sm lg:text-base xl:text-lg"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
