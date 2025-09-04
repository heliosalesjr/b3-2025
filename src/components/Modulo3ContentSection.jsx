import FadeInWhenVisible from "./FadeInWhenVisible"

import Modulo3Objetivos from "./content/Modulo3Objetivos"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import PageApresentacao1 from "./content/PageApresentacao1"


import PageApresentacao2 from "./content/PageApresentacao2"


export default function Modulo3ContentSection() {
    return (
      <section id="content" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            
                <FadeInWhenVisible>
                  < PageApresentacao1/>
                </FadeInWhenVisible>
                 
                 
                <FadeInWhenVisible>
                  <Modulo3Objetivos />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <PageApresentacao2 />
                </FadeInWhenVisible>
                

                
                
                
                
                <div className="flex justify-center mt-8">
                  <Button asChild>
                    <Link href="/monitoramento">Próxima Página: Monitoramento</Link>
                  </Button>
                </div>
            
          </div>
        </div>
      </section>
    )
  }
  
  