"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaSearch, FaRoute, FaTrophy, FaUsers, FaComments, FaClipboardList, FaBook, FaGoogleDrive, FaGamepad, FaCalendarCheck, FaEye, FaPresentationscreen } from 'react-icons/fa';

const MetAvaTipos = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('tipos-avaliacao');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="tipos-avaliacao" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Tipos de Avaliação: Diagnóstica, Formativa e Somativa
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
        
        <p className="text-slate-700 text-lg leading-relaxed max-w-5xl mx-auto">
          Para uma avaliação completa e eficaz na Aprendizagem Baseada em Projetos, é fundamental compreender e aplicar os diferentes tipos de avaliação: diagnóstica, formativa e somativa. Cada uma delas tem um propósito específico e contribui de maneira única para o processo de ensino-aprendizagem.
        </p>
      </div>

      {/* Avaliação Diagnóstica */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
        <div className="space-y-6">
          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
              <FaSearch className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-blue-800">
              Avaliação Diagnóstica
            </h2>
          </div>

          {/* Cards de informações */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Propósito e Quando Aplicar */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-3">Propósito</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                A avaliação diagnóstica é realizada no início de um novo ciclo de aprendizagem, projeto ou unidade. Seu principal objetivo é identificar os conhecimentos prévios dos estudantes, suas habilidades, interesses e possíveis lacunas de aprendizagem. Ela serve como um ponto de partida para o planejamento e a personalização do ensino.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <FaEye className="text-sm" />
                <span className="text-xs font-semibold">QUANDO APLICAR:</span>
              </div>
              <p className="text-slate-600 text-sm mt-1">
                No início do ano letivo, de um novo projeto de educação financeira, ou antes de introduzir um novo conceito complexo.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-3">Benefícios</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Permite ao professor adaptar o conteúdo e as estratégias de ensino às necessidades reais da turma, garantindo que a educação financeira seja relevante e acessível a todos.
              </p>
            </div>
          </div>

          {/* Estratégias */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-blue-700 mb-4">Conexão com o Programa</h3>
            <p className="text-slate-700 text-sm mb-4">
              "Diagnóstico do perfil da turma e de seus conhecimentos prévios" no Módulo 1. Ele sugere diversas estratégias, como:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaUsers className="text-blue-500" />
                  <span className="font-semibold text-blue-700 text-sm">Para o perfil da turma:</span>
                </div>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• "Jogo de perguntas e respostas"</li>
                  <li>• "Bate-papo em pequenos grupos"</li>
                  <li>• "Roda de conversa"</li>
                  <li>• "A pessoa mais importante da minha vida"</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaBook className="text-blue-500" />
                  <span className="font-semibold text-blue-700 text-sm">Para conhecimentos prévios:</span>
                </div>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• "Atividades dos capítulos 1, 2 e 3 do Livro do Estudante"</li>
                  <li>• "Sondagem por meio do Google Formulários"</li>
                  <li>• "Quiz sobre conteúdo de matemática do ano anterior"</li>
                  <li>• "Provinhas (importante deixar claro aos estudantes que não vale nota)"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avaliação Formativa */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
        <div className="space-y-6">
          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-green-800">
              Avaliação Formativa
            </h2>
          </div>

          {/* Cards de informações */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Propósito e Quando Aplicar */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-green-700 mb-3">Propósito</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                A avaliação formativa ocorre durante o processo de ensino-aprendizagem. Seu objetivo é monitorar continuamente o progresso dos estudantes, fornecer feedback imediato e construtivo, e permitir que o professor ajuste suas estratégias pedagógicas em tempo real. É um processo de "avaliação para a aprendizagem".
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <FaEye className="text-sm" />
                <span className="text-xs font-semibold">QUANDO APLICAR:</span>
              </div>
              <p className="text-slate-600 text-sm mt-1">
                Regularmente e em momentos-chave ao longo do processo.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-green-700 mb-3">Benefícios</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Ajuda os estudantes a identificar seus pontos fortes e áreas de melhoria, promovendo a autorregulação da aprendizagem. Para o professor, oferece dados para intervir prontamente, sanar dúvidas e aprofundar conhecimentos.
              </p>
            </div>
          </div>

          {/* Conexão com o programa */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-green-700 mb-3">Conexão com o Programa</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Este tipo de avaliação está intrinsecamente ligado ao conceito de "monitoramento" que discutimos na seção 3.1. As "verificações e métodos avaliativos" para acompanhar o avanço dos projetos são exemplos de avaliação formativa. O uso do "Diário de Bordo" e do "Padlet" para registrar o processo e as discussões em sala de aula são ferramentas formativas essenciais.
            </p>
          </div>
        </div>
      </div>

      {/* Avaliação Somativa */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200">
        <div className="space-y-6">
          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-800 bg-clip-text text-transparent">
              Avaliação Somativa
            </h2>
          </div>

          {/* Cards de informações */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Propósito e Quando Aplicar */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-3">Propósito</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                A avaliação somativa é realizada ao final de uma unidade de ensino, de um módulo ou de um projeto completo. Seu objetivo é verificar o nível de aprendizagem alcançado pelos estudantes em relação aos objetivos propostos. É uma "avaliação da aprendizagem".
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <FaEye className="text-sm" />
                <span className="text-xs font-semibold">QUANDO APLICAR:</span>
              </div>
              <p className="text-slate-600 text-sm mt-1">
                Ao término de um PPDA, de um capítulo do Livro do Estudante, ou no encerramento do programa anual.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-3">Benefícios</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Fornece um panorama geral do que foi aprendido e serve como base para a certificação ou para a tomada de decisões sobre o próximo estágio da aprendizagem. É importante que, mesmo na avaliação somativa, o foco não seja apenas a nota, mas a demonstração de competências e a reflexão sobre o percurso.
              </p>
            </div>
          </div>

          {/* Conexão com o programa */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-4">Conexão com o Programa</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Embora a ABP valorize o processo, a avaliação somativa ainda tem seu lugar. O "Passo 8: Avaliação de percurso e de resultados" do roteiro do PPDA, inclui a necessidade de "um bom plano de avaliação [que] contém indicadores ou evidências de aprendizagem de acordo com cada objetivo elencado". Além disso, o "Passo 10: Culminância para celebração e apresentação dos resultados" é um momento somativo, onde os estudantes apresentam o produto final de seu aprendizado em educação financeira.
            </p>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default MetAvaTipos