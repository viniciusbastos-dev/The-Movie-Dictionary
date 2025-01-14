import React from "react";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations("NavBar");
  return (
    <nav className="w-fit bg-black-6 p-[10px] border-4 border-black-12 rounded-xl">
      <ul className="flex gap-8 flex-col lg:flex-row">
        <li>
          <NavLink href="/">{t("home")}</NavLink>
        </li>
        <li>
          <NavLink href="/filmes-e-series">{t("moviesAndSeries")}</NavLink>
        </li>
        <li>
          <NavLink href="/support">{t("support")}</NavLink>
        </li>
        <li>
          <NavLink href="/subscriptions">{t("subscriptions")}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
