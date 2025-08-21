"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const AvaRubrica = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('avaliacao-rubrica');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const rubricsData = [
    {
      aspecto: "Organização do Plano de Orçamento",
      nivel1: "O plano apresenta informações desorganizadas, dificultando a compreensão.",
      nivel2: "O plano é parcialmente organizado, mas com algumas inconsistências ou falta de clareza.",
      nivel3: "O plano é bem organizado, com categorias claras e fácil de entender.",
      nivel4: "O plano é exemplarmente organizado, com layout intuitivo e todas as informações apresentadas de forma clara."
    },
    {
      aspecto: "Precisão dos Cálculos",
      nivel1: "Cálculos incorretos ou ausentes, comprometendo a validade do orçamento.",
      nivel2: "Alguns erros de cálculo que afetam a precisão do orçamento, mas não comprometem o resultado final.",
      nivel3: "Cálculos precisos, com pouquíssimos erros que não comprometem o resultado final.",
      nivel4: "Todos os cálculos são precisos e corretos, demonstrando total domínio das operações."
    },
    {
      aspecto: "Propostas de Economia",
      nivel1: "Não apresenta propostas de economia ou são irrealistas.",
      nivel2: "Apresenta algumas propostas de economia, mas pouco detalhadas ou com pouca relevância.",
      nivel3: "Apresenta propostas de economia relevantes e viáveis, com justificativas claras.",
      nivel4: "Apresenta propostas de economia inovadoras, altamente relevantes e detalhadas, com potencial impacto significativo."
    }
  ];

  return (
    <div ref={ref} id="avaliacao-rubrica" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Conteúdo Inicial */}
      <div className="space-y-8">
        <p className="text-slate-700 text-2xl font-semibold text-center">
          Uma rubrica de avaliação eficaz geralmente contém os seguintes itens:
        </p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 text-base leading-relaxed">
                <span className="font-semibold text-slate-800">Descrição detalhada da tarefa:</span> O que se espera que o estudante faça ou produza. Por exemplo, "Elaborar um plano de orçamento familiar para um mês, considerando receitas e despesas fictícias."
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 text-base leading-relaxed">
                <span className="font-semibold text-slate-800">Aspectos que serão avaliados:</span> Quais são os elementos-chave da tarefa que serão observados e julgados. Para o exemplo do orçamento, poderiam ser: "Organização do plano", "Precisão dos cálculos", "Coerência das categorias de despesa", "Propostas de economia".
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 text-base leading-relaxed">
                <span className="font-semibold text-slate-800">Escalas de diferentes níveis de desempenho:</span> Descrevem os diferentes níveis de qualidade ou proficiência que um estudante pode demonstrar em cada aspecto avaliado. Geralmente, são escalas com 3 a 5 níveis (ex: "Iniciante", "Em Desenvolvimento", "Proficiente", "Avançado").
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 text-base leading-relaxed">
                <span className="font-semibold text-slate-800">Descrição dos diferentes níveis de desempenho:</span> Para cada aspecto avaliado e para cada nível da escala, há uma descrição clara e específica do que o estudante precisa demonstrar para atingir aquele nível. Isso elimina a subjetividade e fornece um guia claro.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Título do Exemplo */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Exemplo Prático
          </h2>
          <div className="w-1 h-10 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Tabela de Rubrica */}
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white rounded-xl shadow-lg border border-slate-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-green-50">
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-800 border-b border-slate-200">
                  Aspecto Avaliado
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200 bg-red-50">
                  Nível 1: Iniciante
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200 bg-yellow-50">
                  Nível 2: Em desenvolvimento
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200 bg-blue-50">
                  Nível 3: Proficiente
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200 bg-green-50">
                  Nível 4: Avançado
                </th>
              </tr>
            </thead>
            <tbody>
              {rubricsData.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors duration-200">
                  <td className="px-6 py-4 text-sm font-semibold text-slate-800 border-b border-slate-100 bg-gradient-to-r from-blue-25 to-green-25">
                    {row.aspecto}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 border-b border-slate-100 bg-red-25">
                    {row.nivel1}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 border-b border-slate-100 bg-yellow-25">
                    {row.nivel2}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 border-b border-slate-100 bg-blue-25">
                    {row.nivel3}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 border-b border-slate-100 bg-green-25">
                    {row.nivel4}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nota explicativa */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-100">
        <p className="text-slate-700 text-sm leading-relaxed italic">
          <span className="font-semibold text-slate-800">Nota:</span> Esta rubrica fornece critérios claros e objetivos para avaliar o desempenho dos estudantes em cada aspecto, facilitando tanto a avaliação do professor quanto a autoavaliação dos alunos.
        </p>
      </div>

    </div>
  )
}

export default AvaRubrica