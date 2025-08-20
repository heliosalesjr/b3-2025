"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const MetAvErro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('importancia-erro');
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
    <div ref={ref} id="importancia-erro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-8">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
              A Importância do Erro no Processo de Aprendizagem
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Um dos aspectos mais libertadores dessa nova visão de avaliação é a ressignificação do erro. Longe de ser um fracasso, o erro passa a ser visto como uma <span className="font-semibold">"pista"</span> valiosa.
          </p>
          
          <blockquote className="border-l-4 border-green-500 pl-6 italic text-slate-600 bg-green-50 rounded-r-lg p-4">
            "O erro passa a ser considerado como pista que indica como o educando está relacionando os conhecimentos que já possui com os novos conhecimentos que vão sendo adquiridos, admitindo uma melhor compreensão dos conhecimentos solidificados, interação necessária em um processo de construção e de reconstrução."
          </blockquote>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Ao entender o erro como parte do processo de construção do conhecimento, o professor pode oferecer <span className="font-semibold">feedback mais construtivo e direcionado</span>, ajudando o estudante a reconstruir seu entendimento e aprofundar sua aprendizagem em educação financeira.
          </p>
          
        </div>
        
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/erro.jpg"
              alt="A importância do erro no processo de aprendizagem"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetAvErro