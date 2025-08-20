"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaLightbulb, FaClipboard, FaPen } from 'react-icons/fa';

const MetAvaAt = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('atividade-pratica');
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
    <div ref={ref} id="atividade-pratica" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 p-8 shadow-2xl border-2 border-blue-200 space-y-8">
      
      {/* Cabeçalho chamativo */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-xl">
            <FaLightbulb className="text-white text-3xl" />
          </div>
          <div className="w-2 h-16 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
        </div>
        
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
          Atividade Prática
        </h2>
        
        <p className="text-xl font-semibold text-slate-700">
          Pense em um projeto recente.
        </p>
      </div>

      {/* Cards das perguntas */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Pergunta 1 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
            <FaClipboard className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
            Que tipo de avaliação você aplicou?
            </h3>
        </div>

        {/* Pergunta 2 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
            <FaLightbulb className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
            Qual seria uma alternativa melhor?
            </h3>
        </div>

        {/* Pergunta 3 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full">
            <FaPen className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
            Escreva duas ações que você pode testar na próxima atividade.
            </h3>
        </div>
        </div>

      {/* Mensagem de reflexão */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-100/50 to-green-100/50 rounded-full px-8 py-4 shadow-lg border border-blue-200">
          <p className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            💭 Momento de Reflexão e Planejamento
          </p>
        </div>
      </div>

    </div>
  )
}

export default MetAvaAt