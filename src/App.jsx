import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Filtro from "./components/Filtro/Filtro";
import Searchbar from "./components/Searchbar/Searchbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes",
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="h-full bg-grafite font-prompt">
      <div className="mx-auto flex w-[62vw] gap-3 py-14">
        <Sidebar />
        <div className="grow-[2]">
          <Searchbar />
          <Filtro />
          <ul className="mt-4 grid grid-cols-2 grid-rows-1 gap-6">
            {data
              ? data.map((item) => (
                  <li key={item.id}>
                    <Card
                      imagem={item.imagem_capa}
                      titulo={item.titulo}
                      resumo={item.resumo}
                      linhasDeCodigo={item.linhas_de_codigo}
                      comentarios={item.comentarios}
                      compartilhamentos={item.compartilhamentos}
                      usuario={item.usuario.imagem}
                      name={item.usuario.nome}
                    />
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
