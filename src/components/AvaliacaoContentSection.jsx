
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import AvaIntro from "./content/AvaIntro"
import AvaRubrica from "./content/AvaRubrica"
import AvaBeneficios from "./content/AvaBeneficios"



export default function AvaliacaoContentSection() {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          
            
            <FadeInWhenVisible>
             <AvaIntro />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <AvaRubrica />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <AvaBeneficios />
            </FadeInWhenVisible>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/encerramento">Próxima Página: Encerramento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

