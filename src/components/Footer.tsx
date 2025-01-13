import React from "react";
import FooterList from "./FooterList";
import { footerLinksData } from "@/config/config";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black-6 pt-[50px] px-4 pb-5 md:px-20 md:pt-20 md:pb-10 xl:px-28 xl:pb-12">
      <div className="mb-[50px] md:mb-[80px] lg:mb-[100px] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-y-[30px]">
        {footerLinksData?.map((item) => (
          <FooterList key={item.title} title={item.title} data={item} />
        ))}
      </div>
      <div className="border-t-1 border-black-15 flex flex-col gap-5 lg:flex-row justify-between pt-6 text-gray-60 text-csm">
        <span className="">&copy; 2024 The Movie Dictionary.</span>
        <ul className="list-with-bar flex gap-4">
          <li>{t("termsOfUse")}</li>
          <li>{t("privacyPolicy")}</li>
          <li>{t("cookiesPolicy")}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
