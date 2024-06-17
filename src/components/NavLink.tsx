"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href = "#", children, ...rest }) => {
  const path = usePathname();
  return (
    <Link
      {...rest}
      href={href}
      className={`${
        path === href ? "bg-black10 text-white" : "text-grey75"
      } rounded-lg py-[14px] px-6 block xl:text-lg lg:text-sm`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
