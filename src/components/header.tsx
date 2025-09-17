import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import logoUniaoFelina from "../assets/imgs/logoUniaoFelina.png";
import bgCat from "../assets/imgs/bgCat.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full top-0 z-40 shadow-2xl  bg-yellow-400">
      <div
        className="absolute inset-0 bg-cover bg-scroll opacity-50"
        style={{ backgroundImage: `url(${bgCat})` }}
      ></div>

      <nav className="relative flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-4">
          <IoMenu
            onClick={() => setMenuOpen(true)}
            className="text-purple-600 text-2xl cursor-pointer md:hidden"
          />
          <img
            src={logoUniaoFelina}
            alt="Logo União Felina"
            className="w-12 h-auto"
          />
        </div>

        <ul className="hidden md:flex text-xl gap-6 text-purple-800 font-shikhand">
          <li className="hover:text-white transform transition-transform duration-300 hover:scale-110">
            Quem Somos
          </li>
          <li className="hover:text-white transform transition-transform duration-300 hover:scale-110">
            Nossa História
          </li>
          <li className="hover:text-white transform transition-transform duration-300 hover:scale-110">
            Seja Voluntário
          </li>
          <li className="hover:text-white transform transition-transform duration-300 hover:scale-110">
            Contatos
          </li>
        </ul>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-black/20 z-20 md:hidden transition-opacity duration-200 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <ul
        className={`fixed z-50 top-0 left-0 h-full bg-purple-700 shadow-lg flex flex-col gap-6 text-yellow-300 pl-4 pr-12 py-7 font-shikhand text-xl transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <IoMenu
          onClick={() => setMenuOpen(false)}
          className="text-yellow-300 text-2xl cursor-pointer hover:text-white transition-colors duration-250"
        />
        <li
          onClick={() => setMenuOpen(false)}
          className=" hover:text-white transform transition-transform duration-300 hover:scale-110"
        >
          Quem Somos
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className=" hover:text-white transform transition-transform duration-300 hover:scale-110"
        >
          Nossa História
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="  hover:text-white transform transition-transform duration-300 hover:scale-110"
        >
          Seja Voluntário
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className=" hover:text-white transform transition-transform duration-300 hover:scale-110"
        >
          Contatos
        </li>
      </ul>
    </header>
  );
}
