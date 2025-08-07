import { Button } from "@/components/ui/button"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Link from "next/link"

import MatrizIntro from "./content/MatrizIntro"


export default function Matriz() {
    return (
      <section id="content" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">

            
              <MatrizIntro />
            

     
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/smart">Próxima Página: Ferramenta SMART</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  