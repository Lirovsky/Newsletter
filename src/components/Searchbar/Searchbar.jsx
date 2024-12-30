import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="text"
        className="h-10 w-full rounded-lg bg-cinza-escuro bg-lupa bg-[length:1.5rem] bg-[left_1rem_center] bg-no-repeat px-14 py-2 text-xl text-cinza-claro"
        placeholder="Digite o que você procura"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
