"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaFile, FaUsers, FaBook, FaBullseye, FaClock, FaChartLine, FaExclamationCircle } from 'react-icons/fa';

const MoniDef = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('introducao-monitoramento');
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
    <div ref={ref} id="introducao-monitoramento" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            O Monitoramento
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full"></div>
        </div>
        
        {/* Parágrafos de Introdução */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            O monitoramento é crucial para observar <span className="font-semibold text-slate-800">"o quanto esses processos estão dando resultado"</span>. Ele nos permite ir além do <span className="font-semibold text-slate-800">"o quê"</span> está sendo feito, para entender o <span className="font-semibold text-slate-800">"como"</span> e o <span className="font-semibold text-slate-800">"porquê"</span> da aprendizagem.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Para que o monitoramento seja eficaz e contribua para o êxito dos projetos, é fundamental observar três aspectos principais:
          </p>
        </div>
      </div>

      {/* Cards dos 3 Aspectos */}
      <div className="grid gap-8 md:grid-cols-3">
        
        {/* Card 1: Planejamento do PPDA */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto shadow-lg">
            <FaBullseye className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Planejamento do PPDA ou PDA
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Se os objetivos (conceituais, procedimentais e atitudinais) elencados estão sendo alcançados através das verificações e de{' '}
              <span className="font-semibold">métodos avaliativos</span>.
            </p>
          </div>
        </div>

        {/* Card 2: Plano de Ação Coletivo */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto shadow-lg">
            <FaUsers className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Plano de Ação Coletivo
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Observar se os alunos estão cumprindo as tarefas propostas no Plano de Ação,{' '}
              <span className="font-semibold">se as tarefas estão dentro do prazo</span> estipulado e se essas tarefas são palpáveis.
            </p>
          </div>
        </div>

        {/* Card 3: Diário de Bordo */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto shadow-lg">
            <FaFile className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Diário de Bordo
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Registrar o processo e{' '}
              <span className="font-semibold">diagnosticar possíveis falhas</span> no percurso para tentar saná-las, ou até mesmo{' '}
              <span className="font-semibold">identificar avanços</span> que podem ser feitos antes do prazo estabelecido no cronograma.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MoniDef