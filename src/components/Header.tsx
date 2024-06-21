import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logo.png";
import NavBar from "./NavBar";
import * as SVG from "@/assets/SVG";
import Link from "next/link";

const Header = () => {
  return (
    <header className="float-left relative z-10 w-full px-header-clamped xl:py-8 lg:py-6 pt-10 pb-4 flex justify-between">
      <Link href="/" className="max-h-16">
        <Image
          className="h-logo-clamped"
          priority
          src={logoImg}
          alt="Logo Streamvibe"
        />
      </Link>
      <NavBar />
      <div className=" gap-8 hidden lg:flex">
        <button>
          <SVG.SearchIcon />
        </button>
        <button>
          <SVG.NotificationIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
