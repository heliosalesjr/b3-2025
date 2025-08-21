"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const AvaIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('avaliacao-intro');
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
    <div ref={ref} id="avaliacao-intro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-green-500 rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
            Retomando registros e monitoramento para avaliar
          </h1>
          <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-slate-500 rounded-full"></div>
        </div>
        <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
          A eficácia da avaliação, especialmente a formativa, depende diretamente da qualidade dos registros e do monitoramento contínuo. Os registros não são apenas burocracia; são a memória do processo de aprendizagem, fornecendo evidências concretas para a avaliação.
        </p>
      </div>

      {/* Seção 1: O Diário de Bordo como ferramenta central - Imagem à direita */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">
              O Diário de Bordo como ferramenta central
            </h2>
          </div>
          
          <p className="text-slate-700 text-base leading-relaxed">
            O Diário de Bordo, já mencionado como crucial para o monitoramento, é igualmente vital para a avaliação. Ele permite ao professor:
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Acompanhar o progresso individual e coletivo:</span> Registros regulares sobre a participação dos alunos, suas contribuições, dificuldades e superações oferecem um panorama detalhado do desenvolvimento de cada um.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Identificar padrões:</span> Ao longo do tempo, o Diário de Bordo pode revelar padrões de aprendizagem, como conceitos que geram mais dúvidas ou habilidades que precisam ser mais desenvolvidas.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Fundamentar o feedback:</span> Com base nos registros, o feedback ao estudante se torna mais específico, justo e eficaz, pois se apoia em observações concretas e não apenas em impressões.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Documentar o processo:</span> Em projetos de longa duração, o Diário de Bordo serve como um histórico que pode ser consultado para entender o percurso, as decisões tomadas e os resultados alcançados.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center h-full order-2">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/db.jpg"
              alt="Diário de Bordo como ferramenta central"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção 2: Rubricas de Avaliação - Imagem à esquerda */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="flex items-center justify-center h-full order-2 md:order-1">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/donedone.jpg"
              alt="Rubricas de Avaliação"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">
              Rubricas de Avaliação: transparência e participação no processo avaliativo
            </h2>
          </div>
          
          <p className="text-slate-700 text-base leading-relaxed">
            As rubricas de avaliação são ferramentas poderosas que trazem clareza, objetividade e transparência ao processo avaliativo, tanto para o professor quanto para o estudante. Elas são especialmente úteis na Aprendizagem Baseada em Projetos, onde a avaliação de produtos complexos e habilidades diversas pode ser subjetiva sem critérios bem definidos.
          </p>
          
          <p className="text-slate-700 text-base leading-relaxed">
            As rubricas de avaliação, ou rubricas avaliativas, são comumente definidas como o desenvolvimento de critérios ou atributos da tarefa a ser realizada pelo estudante.
          </p>
        </div>
      </div>

    </div>
  )
}

export default AvaIntro