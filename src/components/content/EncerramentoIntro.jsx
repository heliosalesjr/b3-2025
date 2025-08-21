"use client"
import React, { useState, useEffect, useRef } from 'react'

import { useSidebar } from '@/contexts/SidebarContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Mat8 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('encerramento-intro');
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
    <div ref={ref} id="encerramento-intro" className="scroll-mt-20 mt-8 bg-white rounded-lg shadow-2xl p-6 md:p-10 space-y-8 text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-bold text-slate-700">
        Encerrando o Módulo 3
      </h2>

      {/* Subtítulo */}
      <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto">
        Chegamos ao final do Módulo 3, onde exploramos o monitoramento e as diversas facetas da avaliação na Aprendizagem Baseada em Projetos. Vimos que, no programa "Aprendendo a Lidar com Dinheiro", a avaliação não é um fim em si mesma, mas uma ferramenta poderosa para impulsionar a aprendizagem.
      </p>

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6QVRbZvtHfw"
          title="Resumo Módulo 1"
          allowFullScreen
        ></iframe>
      </div>

      
    </div>
  )
}

export default Mat8
