import React from "react";

import { useTema, temas } from "../../context/Tema";

export default function Container({ children }) {
  const { tema, setTema } = useTema();

  return (
    <div
      style={{
        background: tema.colors.background,
        color: tema.colors.text
      }}
    >
      {children}
      <button
        onClick={() =>
          setTema(tema === temas.argentina ? temas.brasil : temas.argentina)
        }
      >
        {tema === temas.argentina ? "Tema Brasil" : "Tema Argentina"}
      </button>
    </div>
  );
}
