import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="hidden md:block w-fit bg-black-6 p-[10px] border-4 border-black-12 rounded-xl">
      <ul className="flex gap-8 flex-col lg:flex-row">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/movies">Filmes & TV</NavLink>
        </li>
        <li>
          <NavLink href="/support">Suporte</NavLink>
        </li>
        <li>
          <NavLink href="/subscriptions">Planos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
