export default function Filtro() {
  const filtros = ["Programação", "Front-end", "Acessibilidade"];
  return (
    <section className="mt-4 flex justify-between">
      <ul className="flex gap-3">
        {filtros.map((filtro, index) => (
          <li
            key={index}
            className="rounded bg-cinza-claro px-2 py-1 text-lg text-cinza-escuro"
          >
            {filtro}
          </li>
        ))}
      </ul>
      <button className="bg-transparent text-lg text-cinza-medio">
        Limpar tudo
      </button>
    </section>
  );
}
