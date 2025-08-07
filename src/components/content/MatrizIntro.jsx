"use client";
import { useEffect, useRef, useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const MatrizIntro = () => {
  
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("matriz-intro");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const [mostrarImagem, setMostrarImagem] = useState(false);

  return (
    <div
      ref={ref}
      id="matriz-intro"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-green-500 rounded-full"></div>
        <h2 className="text-4xl font-bold text-center text-slate-700">
          Matriz de habilidades
        </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
      </div>

      <div className="text-slate-700 space-y-5 text-lg leading-relaxed">
        <p>
          No quadro geral a seguir encontram-se os temas abordados pelo{" "}
          <strong>Livro do Estudante</strong>, com as competências gerais e
          específicas da <strong>BNCC</strong>, as habilidades de Matemática
          desenvolvidas e sugestões de como articulá-las com o Projeto Coletivo
          dos jovens.
        </p>
        <p>
          A <strong>BNCC</strong> define dez competências a serem trabalhadas e
          desenvolvidas ao longo da Educação Básica. Cada uma delas engloba
          objetivos e habilidades que devem ser estimuladas no estudante. São
          elas:
        </p>
        <ol className="list-decimal list-inside space-y-1 pl-4">
          <li>
            <strong>Conhecimento</strong>
          </li>
          <li>
            <strong>Pensamento científico, crítico e criativo</strong>
          </li>
          <li>
            <strong>Repertório cultural</strong>
          </li>
          <li>
            <strong>Comunicação</strong>
          </li>
          <li>
            <strong>Cultura digital</strong>
          </li>
          <li>
            <strong>Trabalho e projeto de vida</strong>
          </li>
          <li>
            <strong>Argumentação</strong>
          </li>
          <li>
            <strong>Autoconhecimento e autocuidado</strong>
          </li>
          <li>
            <strong>Empatia e cooperação</strong>
          </li>
          <li>
            <strong>Responsabilidade e cidadania</strong>
          </li>
        </ol>

        <div className="flex flex-col items-center space-y-6">
          {/* Imagem principal */}
          <div className="flex justify-center">
            <Image
              src="/matriz_habilidades.png"
              alt="Matriz de Habilidades"
              width={800}
              height={800}
              className="max-w-full max-h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Box de destaque com chamada */}
          <div
            onClick={() => setMostrarImagem(!mostrarImagem)}
            className="cursor-pointer w-full max-w-3xl p-6 text-center rounded-xl shadow-md border border-blue-200 bg-gradient-to-r from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 transition duration-300"
          >
            <p className="text-lg font-semibold text-blue-800">
              Para saber mais sobre as Competências Gerais da BNCC, acesse esta
              imagem.
            </p>
          </div>

          {/* Imagem com zoom que aparece ao clicar */}
          {mostrarImagem && (
            <div className="flex justify-center max-w-3xl w-full">
              <Zoom>
                <img
                  src="/competencias_gerais.jpeg"
                  alt="Competências Gerais da BNCC"
                  style={{
                    maxWidth: "800px",
                    width: "100%",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "zoom-in",
                  }}
                />
              </Zoom>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatrizIntro;
