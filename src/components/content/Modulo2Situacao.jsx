'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Modulo2Situacao = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-roteiro');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref} 
      id="modulo-2-roteiro"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Imagem e camada escura */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/learning.jpg"
                alt="Aprendizagem baseada em projetos"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-green-800/70 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                O que é o monitoramento pedagógico em Aprendizagem Baseada em Projetos
                </h2>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Texto alternativo com fundo azul */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-green-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl">

              <p className="text-base md:text-lg font-medium text-white pb-8">
                No contexto da Aprendizagem Baseada em Projetos (ABP), o monitoramento pedagógico vai muito além de uma simples verificação de tarefas. Ele é um processo contínuo de observação, registro e análise do desenvolvimento dos estudantes e do próprio projeto, com o objetivo de identificar avanços, desafios e necessidades de ajuste. É a bússola que orienta o educador e os alunos no percurso da aprendizagem.
              </p>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante com efeito bounce */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-600 hover:bg-blue-100 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  )
}

export default Modulo2Situacao


