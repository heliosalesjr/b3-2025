"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";  // Importa o componente Image
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhIntro = () => {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("ferramentas-5w2h");
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
    <div
      ref={ref}
      id="ferramentas-5w2h"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />
        <h2 className="text-4xl font-bold text-center text-slate-700">
          Ferramenta 5W2H: um modelo de plano de ação de atividades
        </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-slate-500 rounded-full" />
      </div>

      {/* Imagem centralizada */}
      <div className="flex justify-center mb-8">
        <Image
          src="/5w2h.jpg"
          alt="Imagem da ferramenta 5W2H"
          width={600}     // Ajuste o tamanho conforme desejar
          height={400}
          className="rounded-lg shadow-lg"
          priority={true} // Se quiser que carregue rápido
        />
      </div>

      <div className="text-slate-700 space-y-5 text-lg leading-relaxed">
        <p>
          Se a ferramenta <strong>SMART</strong> ajuda o estudante a dizer o que ele quer,
          a ferramenta <strong>5W2H</strong> mostra como ele vai chegar lá.
          Trata-se de um modelo simples que pode ser aplicado a projetos escolares,
          metas pessoais, trabalhos em grupo e até mesmo à gestão de uma pequena
          feira ou campanha financeira entre os colegas.
        </p>
        <p>
          O nome vem de sete perguntas-chave, cinco começando com “W” e duas com “H” (em inglês).
          Essas perguntas orientam o planejamento de qualquer atividade. Vamos ver como funciona cada uma delas:
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what">
            <AccordionTrigger className="justify-center text-center">
              What? – O que será feito?
            </AccordionTrigger>
            <AccordionContent>
              É a definição da ação. O foco deve ser direto.<br /><br />
              <strong>Exemplo:</strong> “Juntar R$ 80 para comprar uma mochila nova.”<br /><br />
              Aqui é importante evitar respostas amplas como “quero economizar”.
              Ajude os alunos a escreverem o o quê de forma objetiva.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why">
            <AccordionTrigger className="justify-center text-center">
              Why? – Por que será feito?
            </AccordionTrigger>
            <AccordionContent>
              Essa pergunta ativa o sentido.<br /><br />
              <strong>Exemplo:</strong> “Porque minha mochila está rasgada e preciso de uma nova para o próximo semestre.”<br /><br />
              Essa etapa é fundamental para fortalecer a motivação e o engajamento,
              conectando o plano com necessidades reais.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="where">
            <AccordionTrigger className="justify-center text-center">
              Where? – Onde será feito?
            </AccordionTrigger>
            <AccordionContent>
              Indica o local de execução ou o contexto.<br /><br />
              <strong>Exemplo:</strong> “Vou guardar o dinheiro em casa, dentro de uma caixinha que ninguém mexe.”<br /><br />
              Trabalha a noção de organização e segurança no uso do dinheiro.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="when">
            <AccordionTrigger className="justify-center text-center">
              When? – Quando será feito?
            </AccordionTrigger>
            <AccordionContent>
              Trata do tempo de execução.<br /><br />
              <strong>Exemplo:</strong> “Vou guardar R$ 10 por semana, começando hoje e terminando em oito semanas.”<br /><br />
              Aqui os alunos aprendem a dividir metas em pequenas etapas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="who">
            <AccordionTrigger className="justify-center text-center">
              Who? – Quem vai fazer?
            </AccordionTrigger>
            <AccordionContent>
              Define o(s) responsável(is).<br /><br />
              <strong>Exemplo:</strong> “Eu sou o responsável por guardar o dinheiro, mas minha mãe vai me ajudar a separar o valor toda semana.”<br /><br />
              Uma boa oportunidade para reforçar autonomia e diálogo familiar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how">
            <AccordionTrigger className="justify-center text-center">
              How? – Como será feito?
            </AccordionTrigger>
            <AccordionContent>
              Aponta a estratégia e os meios.<br /><br />
              <strong>Exemplo:</strong> “Vou guardar parte da minha mesada e deixar de comprar doces durante esse tempo.”<br /><br />
              Trabalha planejamento e renúncia consciente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-much">
            <AccordionTrigger className="justify-center text-center">
              How much? – Quanto vai custar?
            </AccordionTrigger>
            <AccordionContent>
              Refere-se ao custo total ou ao esforço necessário.<br /><br />
              <strong>Exemplo:</strong> “A mochila custa R$ 80. Já tenho R$ 20, preciso guardar mais R$ 60.”
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default WhIntro;
