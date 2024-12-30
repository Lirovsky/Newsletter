import { PropTypes } from "prop-types";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";

export default function Card({
  imagem,
  titulo,
  resumo,
  linhasDeCodigo,
  comentarios,
  compartilhamentos,
  usuario,
  name,
}) {
  return (
    <article className="grid w-full rounded-lg bg-cinza-escuro text-cinza-claro">
      <div className="flex h-60 w-full items-center justify-center rounded-lg bg-cinza-claro">
        <img
          src={imagem}
          className="h-5/6 w-11/12 rounded-lg object-cover shadow-lg shadow-black"
          alt="Capa"
        />
      </div>
      <div className="h-full p-4">
        <div className="mb-16">
          <h3 className="mb-2 text-lg font-semibold">{titulo}</h3>
          <p className="text-base font-normal leading-6">{resumo}</p>
        </div>
      </div>
      <div className="flex flex-grow-0 items-center justify-between p-5">
        <ul className="flex items-baseline gap-4">
          <li className="flex flex-col items-center gap-1 text-base">
            <img src={Code} alt="códigos" className="pb-1" />
            {linhasDeCodigo}
          </li>
          <li className="flex flex-col items-center gap-1 text-base">
            <img src={Share} alt="compartilhamentos" />
            {compartilhamentos}
          </li>
          <li className="flex flex-col items-center gap-1 text-base">
            <img src={Chat} alt="comentarios" />
            {comentarios}
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <img
            src={usuario}
            className="h-8 w-8 rounded-full object-cover"
            alt="usuária"
          />
          {name}
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  resumo: PropTypes.string.isRequired,
  linhasDeCodigo: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  comentarios: PropTypes.number.isRequired,
  compartilhamentos: PropTypes.number.isRequired,
  usuario: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
