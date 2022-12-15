import React from "react";
import TemaProvider from "./context/Tema";
import Container from "./components/Container";

export default function App() {
  return (
    <TemaProvider>
        <Container>
          <div>
            <style jsx>{`
                div {
                  font-family: Arial, Verdana, sans-serif;
                  font-size: 20px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  border-collapse: collapse;
                  border-radius: 15px;
                  max-width: 500px;
                  gap: 7px;
                  padding: 5px;
                }
                button {
                  font-size: 15px;                                 
                  border: 1px solid #ccc;
                  border-radius: 8px;
                  padding: 5px;
              }
            `}
            </style>
            <div>
              Aperte o botão para mudar a cor.
            </div>
          </div>
        </Container>
    </TemaProvider>
  );
}
