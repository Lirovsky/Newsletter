import Logo from "./assets/Logo_Large.svg";

import { MdOutlineFeed } from "react-icons/md";
import { FaUserCircle, FaInfoCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
  return (
    <aside className="w-44 rounded-lg bg-cinza-escuro px-4 py-10">
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="mt-20 flex flex-col items-center gap-10">
          <li>
            <a
              href="#"
              className="rounded-lg border-2 border-verde-destaque px-4 py-3 text-verde-destaque"
            >
              Publicar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-cinza-claro active:text-branco"
            >
              <MdOutlineFeed className="h-7 w-7" /> Feed
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-cinza-claro active:text-branco"
            >
              <FaUserCircle /> Perfil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-cinza-claro active:text-branco"
            >
              <FaInfoCircle /> Sobre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-cinza-claro active:text-branco"
            >
              <IoIosLogOut /> Sair
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
