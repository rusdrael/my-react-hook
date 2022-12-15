import React, { createContext, useState, useContext } from "react";

const TemaContext = createContext();

export const temas = {
  brasil: {
    colors: {
      background: "Green",
      text: "Yellow"
    }
  },
  argentina: {
    colors: {
      background: "blue",
      text: "white"
    }
  }
};

export default function TemaProvider({ children }) {
  const [tema, setTema] = useState(temas.brasil);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  const context = useContext(TemaContext);
  const { tema, setTema } = context;
  return { tema, setTema };
}