"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';

const navigation = {
  'Apresentação': {
    path: '/',
    components: [
      { id: 'apresentacao-1', title: 'Apresentação do Curso' },
      { id: 'modulo-3-objetivos', title: 'Objetivos do Módulo 3' },
      { id: 'ao-final', title: 'Ao final do módulo...' },
      
    ]
  },
  'Monitoramento': {
    path: '/monitoramento',
    components: [
      { id: 'o-que-e', title: 'O que é?' },
      { id: 'aspectos', title: 'Aspectos principais' },
      { id: 'monitoramento-ppda', title: 'Monitoramento e o PPDA' },
      
    ]
  },
  'Métodos Avaliativos': {
    path: '/metodosavaliativos',
    components: [
      { id: 'ma-intro', title: 'Métodos Avaliativos - Introdução' },
      { id: 'importancia-erro', title: 'A importância do erro' },
      { id: 'tipos-avaliacao', title: 'Tipos de avaliação' },
      { id: 'atividade-pratica', title: 'Atividade prática' },
      
      
       
    ]
  },
  'Avaliação': {
    path: '/avaliacao',
    components: [
      { id: 'avaliacao-intro', title: 'Introdução' },
      { id: 'avaliacao-rubrica', title: 'Rubricas' },
      { id: 'avaliacao-beneficios', title: 'Benefícios' },
      
      

    ]
  },
  
  'Encerramento': {
    path: '/encerramento',
    components: [
      { id: 'encerramento-intro', title: 'Encerrando o Módulo 3' },
      { id: 'encerramento-quiz', title: 'Teste seus conhecimentos!' },
    ]
  },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewed } = useSidebar();
  const router = useRouter();

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path, componentId = null) => {
    if (componentId) {
      if (window.location.pathname === path) {
        scrollToComponent(componentId);
      } else {
        router.push(`${path}#${componentId}`);
      }
    } else {
      router.push(path);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="w-64 p-4 pt-16 h-full overflow-y-auto mt-4 pb-32">
          <h3 className="font-bold text-lg mb-4">Navegação</h3>
          {Object.entries(navigation).map(([pageName, pageData]) => (
            <div key={pageName} className="mb-4">
              <button
                onClick={() => handleNavigation(pageData.path)}
                className="font-semibold mb-2 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                {pageName}
              </button>
              {pageData.components.length > 0 && (
                <div className="ml-4 space-y-1">
                  {pageData.components.map((component) => (
                    <button
                      key={component.id}
                      onClick={() => handleNavigation(pageData.path, component.id)}
                      className="flex items-center gap-2 text-sm hover:text-blue-600 py-1 w-full text-left transition-colors duration-200"
                    >
                      {isViewed(component.id) && (
                        <span className="text-green-600">✓</span>
                      )}
                      {component.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Botão de abrir/fechar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 transform -translate-y-1/2 z-50 transition-all duration-200 hover:scale-105
          ${isOpen 
            ? 'left-64' // quando sidebar está aberta
            : 'left-0'  // quando está fechada
          }
          bg-white text-blue-600 border border-blue-600 
          hover:bg-blue-600 hover:text-white 
          p-3 rounded-r-lg shadow-lg
        `}
      >
        {isOpen ? '←' : '→'}
      </button>
    </>
  );
}