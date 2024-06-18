import React from "react";
import FooterList from "./FooterList";
import { FooterLinksData } from "@/config/config";

const Footer = () => {
  return (
    <footer className="bg-black06 pt-[50px] px-4 pb-5 md:px-20 md:pt-20 md:pb-10 xl:px-28 xl:pb-12">
      <div className="mb-[50px] md:mb-[80px] lg:mb-[100px] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-y-[30px]">
        {FooterLinksData.map((item) => (
          <FooterList key={item.title} title={item.title} data={item} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
