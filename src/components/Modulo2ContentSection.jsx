import FadeInWhenVisible from "./FadeInWhenVisible"

import Modulo2Objetivos from "./content/Modulo2Objetivos"
import Modulo2Situacao from "./content/Modulo2Situacao"
import Modulo2Content from "./content/Modulo2Content"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import Modulo2Passo from "./content/Modulo2Passo"
import PageApresentacao1 from "./content/PageApresentacao1"
import Modulo2PPDA from "./content/Modulo2PPDA"

export default function Modulo2ContentSection() {
    return (
      <section id="content" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            
                <FadeInWhenVisible>
                  < PageApresentacao1/>
                </FadeInWhenVisible>
                  
                <FadeInWhenVisible>
                  <Modulo2Objetivos />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <Modulo2Situacao />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <Modulo2Passo />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <Modulo2Content />
                </FadeInWhenVisible>
                
                <Modulo2PPDA />
                
                
                
                <div className="flex justify-center mt-8">
                  <Button asChild>
                    <Link href="/matriz">Próxima Página: Matriz de Habilidades</Link>
                  </Button>
                </div>
            
          </div>
        </div>
      </section>
    )
  }
  
  