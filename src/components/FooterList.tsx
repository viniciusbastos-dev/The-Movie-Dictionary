import { FooterSection } from "@/config/config";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  data: FooterSection;
}

const FooterList: React.FC<Props> = ({ title, data }) => {
  return (
    <ul className="flex flex-col gap-3">
      <li className="font-bold mb-3">{title}</li>
      {data?.links?.map((link, index) => (
        <li key={index} className="text-grey60">
          <Link className="hover:text-grey75" href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
