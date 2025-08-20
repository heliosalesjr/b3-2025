"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaInfinity, FaLayerGroup, FaCogs, FaSearch } from 'react-icons/fa';

const MetAvaIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('avaliacao-abp');
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
    <div ref={ref} id="avaliacao-abp" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            Avaliação na Aprendizagem Baseada em Projetos
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
        
        {/* Parágrafos de Introdução */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            Tradicionalmente, a palavra <span className="font-semibold">"avaliação"</span> pode nos submeter a imagens de provas, exames e notas. No entanto, em uma concepção pedagógica moderna, especialmente na <span className="font-semibold italic">Aprendizagem Baseada em Projetos (ABP)</span>, a avaliação assume um papel muito mais amplo e significativo.
          </p>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-600 bg-slate-50 rounded-r-lg p-4">
            "Tradicionalmente, o termo avaliar tem sido associado a fazer prova, fazer exame, atribuir notas, repetir ou passar de ano. Mas em uma concepção pedagógica mais moderna, a educação é concebida como experiência de vivências múltiplas. Nessa abordagem o educando é um ser ativo e dinâmico, que participa da construção de seu próprio conhecimento."
          </blockquote>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Nessa perspectiva, a avaliação do processo de ensino e aprendizagem deve ser:
          </p>
        </div>
      </div>

      {/* Cards dos 3 Tipos de Avaliação */}
      <div className="grid gap-8 md:grid-cols-3">
        
        {/* Card 1: Contínua */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto shadow-lg">
            <FaInfinity className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Contínua
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Não se limita a um momento final, mas <span className="font-semibold">ocorre ao longo de todo o projeto</span>.
            </p>
          </div>
        </div>

        {/* Card 2: Cumulativa */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto shadow-lg">
            <FaLayerGroup className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Cumulativa
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Considera o <span className="font-semibold">acúmulo de experiências e aprendizados</span> ao longo do tempo.
            </p>
          </div>
        </div>

        {/* Card 3: Sistemática */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full mx-auto shadow-lg">
            <FaCogs className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Sistemática
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              É <span className="font-semibold">planejada e organizada</span>, com objetivos claros e critérios definidos.
            </p>
          </div>
        </div>

      </div>

      {/* Conclusão */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg flex-shrink-0">
            <FaSearch className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              A Avaliação como Prática de Investigação
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A avaliação, nesse sentido, torna-se uma <span className="font-semibold">"prática de investigação"</span>. Ela busca interrogar a relação ensino-aprendizagem, identificar os conhecimentos construídos e as dificuldades de forma dialógica, ou seja, através do <span className="font-semibold">diálogo e da interação</span>.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MetAvaIntro