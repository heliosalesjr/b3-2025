"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React from 'react'
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from 'react-icons/fa'

const objetivos = [
  {
    icon: <FaChalkboardTeacher size={32} className="text-blue-600" />,
    title: 'PPDA e PDA',
    description: 'Entender o passo a passo e as etapas do PPDA e PDA'
  },
  {
    icon: <FaBookOpen size={32} className="text-red-500" />,
    title: 'Matriz de habilidades',
    description: 'Conhecer e interpretar a Matriz de habilidades (Quadro Geral das Etapas)'
  },
  {
    icon: <FaUsers size={32} className="text-green-500" />,
    title: 'SMART e 5W2H',
    description: 'Conhecer as  ferramentas SMART e 5W2H'
  },
  
]

const Modulo2Objetivos = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-objetivos');
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
    <div ref={ref} id="modulo-2-objetivos" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
        <h2 className="text-4xl font-bold text-center text-slate-700">
          Objetivos do Módulo 2
        </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-slate-500 rounded-full"></div>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {objetivos.map((obj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center "
          >
            <div className="mb-4 p-3 rounded-full bg-slate-50">{obj.icon}</div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">{obj.title}</h3>
            <p className="text-slate-700 leading-relaxed">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modulo2Objetivos