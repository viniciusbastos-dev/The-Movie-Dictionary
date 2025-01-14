"use client";

import { Link, usePathname } from "@/i18n/routing";

import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href = "#", children, ...rest }) => {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      {...rest}
      href={href}
      className={`${
        path === href ? "bg-black-10 text-white" : "text-gray-75"
      } rounded-lg py-[14px] px-6 block text-sm`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
