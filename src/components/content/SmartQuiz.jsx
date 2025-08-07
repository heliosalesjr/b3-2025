"use client";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/SidebarContext";

const perguntas = [
  {
    id: 1,
    enunciado:
      "Qual das metas abaixo melhor representa a aplicação da ferramenta SMART em um projeto escolar com os alunos?",
    opcoes: [
      "A) Incentivar os alunos a pensarem no futuro e refletirem sobre dinheiro.",
      "B) Ajudar os alunos a economizarem, se possível, para alguma coisa que eles queiram.",
      "C) Propor que cada aluno defina uma meta específica, como “juntar R$ 20 por semana, durante 5 semanas, para comprar um livro que custa R$ 100”.",
    ],
    correta: 2,
    feedbacks: [
      "Essa resposta é muito vaga. Pensar no futuro é importante, mas não define uma meta SMART.",
      "Ainda está genérico demais. Economizar é bom, mas falta clareza, prazo e mensuração.",
      "Perfeito! Essa resposta é específica, mensurável, atingível, relevante e temporal — exatamente como propõe a metodologia SMART.",
    ],
  },
  {
    id: 2,
    enunciado:
      "Durante uma atividade em sala de aula, a professora propõe que os alunos criem metas financeiras. Qual das opções a seguir mostra que a professora está aplicando corretamente a ferramenta SMART?",
    opcoes: [
      "A) Ela pede que os alunos escrevam um texto livre sobre o que gostariam de ter no futuro.",
      "B) Ela orienta os alunos a definirem metas específicas, com prazo, valor definido e justificativa pessoal.",
      "C) Ela sugere que os alunos pensem em algo importante, mas deixa que decidam se querem escrever ou apenas conversar em grupo.",
    ],
    correta: 1,
    feedbacks: [
      "A ideia é boa, mas falta estrutura e objetividade. O texto livre não garante metas SMART.",
      "Excelente! Essa opção está alinhada aos critérios da metodologia SMART.",
      "Essa abordagem pode ser útil, mas não garante metas específicas, mensuráveis ou com prazo definido.",
    ],
  },
];

export default function SmartQuiz() {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  const [respostas, setRespostas] = useState({});
  const [feedback, setFeedback] = useState({
    open: false,
    perguntaId: null,
    mensagem: "",
    correta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("quiz-smart");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const handleResposta = (perguntaIndex, opcaoIndex) => {
    const pergunta = perguntas[perguntaIndex];
    const jaAcertou = respostas[pergunta.id] === pergunta.correta;

    if (jaAcertou) return; // impede alteração se já acertou

    const correta = opcaoIndex === pergunta.correta;

    if (correta) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    setRespostas((prev) => ({
      ...prev,
      [pergunta.id]: correta ? opcaoIndex : prev[pergunta.id],
    }));

    setFeedback({
      open: true,
      perguntaId: pergunta.id,
      mensagem: pergunta.feedbacks[opcaoIndex],
      correta,
    });
  };

  const closeFeedback = () => {
    setFeedback({ open: false, perguntaId: null, mensagem: "", correta: false });
  };

  return (
    <div
      ref={ref}
      id="quiz-smart"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-500 rounded-full" />
        <h2 className="text-3xl font-bold text-center text-slate-700">
          Quiz: Aplicando a ferramenta SMART
        </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full" />
      </div>

      <div className="space-y-10 text-slate-700">
        {perguntas.map((pergunta, perguntaIndex) => {
          const respostaUsuario = respostas[pergunta.id];

          return (
            <div key={pergunta.id} className="space-y-4">
              <p className="text-xl font-medium">{pergunta.enunciado}</p>
              <div className="space-y-3">
                {pergunta.opcoes.map((opcao, opcaoIndex) => {
                  const selecionada = respostaUsuario === opcaoIndex;
                  const jaAcertou = respostaUsuario === pergunta.correta;

                  const cor =
                    selecionada && opcaoIndex === pergunta.correta
                      ? "bg-green-100 border-green-400 text-green-800 font-semibold"
                      : selecionada && opcaoIndex !== pergunta.correta
                      ? "bg-red-100 border-red-400 text-red-800"
                      : "bg-white hover:bg-slate-100 border-slate-300";

                  return (
                    <button
                      key={opcaoIndex}
                      onClick={() => handleResposta(perguntaIndex, opcaoIndex)}
                      disabled={jaAcertou}
                      className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-300 ease-in-out ${cor}`}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AlertDialog open={feedback.open}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {feedback.correta ? "✅ Resposta correta!" : "❌ Resposta incorreta"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 mt-2">
              {feedback.mensagem}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={closeFeedback}>Fechar</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
